# =====================================================================
#  deploy-isf.ps1 — publish the ISF website to https://isfbeach.org
# ---------------------------------------------------------------------
#  HOW TO RUN:
#    1. Open PowerShell
#    2. Paste this line and press Enter:
#         cd "$HOME\OneDrive\Desktop\ISF"; .\deploy-isf.ps1
#
#  If Windows blocks it ("running scripts is disabled on this system"),
#  run this once, then try again:
#    Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
#
#  The script cleans up leftovers, checks the site still builds, commits,
#  pushes, and then WAITS and confirms the live site actually changed —
#  so you don't have to guess whether it worked.
# =====================================================================

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

$SITE = 'https://isfbeach.org'

function Step($n, $msg) { Write-Host "[$n/7] $msg" -ForegroundColor Yellow }
function OK($msg)       { Write-Host "      $msg" -ForegroundColor Green }
function Fail($msg)     { Write-Host ""; Write-Host $msg -ForegroundColor Red }

Write-Host ""
Write-Host "===== ISF deploy =====" -ForegroundColor Cyan
Write-Host ""

# --- 1. Clear the stale git lock left behind by the cloud session -----
Step 1 "Checking for a stale git lock..."
if (Test-Path '.git\index.lock') {
    Remove-Item '.git\index.lock' -Force
    OK "Removed .git\index.lock (this was blocking every git command)."
} else {
    OK "None found."
}

# --- 2. Delete the retired pages --------------------------------------
Step 2 "Removing any retired pages..."
if (Test-Path '_to_delete') {
    Remove-Item '_to_delete' -Recurse -Force
    OK "Deleted _to_delete\."
} else {
    OK "Already gone."
}

# --- 3. Make sure it still builds before publishing anything ----------
if (-not (Test-Path 'node_modules')) {
    Step 3 "Installing dependencies (first run - takes a minute)..."
    npm install
    if ($LASTEXITCODE -ne 0) { Fail "npm install failed. Nothing was pushed."; exit 1 }
}
Step 3 "Building the site..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Fail "BUILD FAILED - nothing was pushed. Send Claude the error above."
    exit 1
}
OK "Build succeeded."

# --- 4. Sync with GitHub ----------------------------------------------
# Fast-forwarding the branch pointer keeps all your files exactly as they
# are and avoids a rejected push if anything changed on github.com.
Step 4 "Syncing with GitHub..."
git fetch origin main
if ($LASTEXITCODE -ne 0) { Fail "Could not reach GitHub. Check your internet connection."; exit 1 }
git reset --soft origin/main
OK "Local branch lined up with GitHub."

# --- 5. Commit ---------------------------------------------------------
# The two .ps1 helper scripts are deliberately kept out of the commit.
#
# The message is generic and dated on purpose. This script runs on every
# deploy, so a message describing one specific change would be a lie on
# every run after the first — and a git history full of confident wrong
# descriptions is worse than one full of vague right ones. If a change is
# worth describing, commit it by hand before running this.
Step 5 "Committing your changes..."
git add -A -- . ':!deploy-isf.ps1' ':!setup-ssh-github.ps1'
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    OK "Nothing new to commit."
} else {
    $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
    git commit -m "Site update $stamp" | Out-Null
    OK "Committed."
}

# --- 6. Push -----------------------------------------------------------
Step 6 "Pushing to GitHub..."
git push origin main
if ($LASTEXITCODE -ne 0) {
    Fail @"
PUSH FAILED.

Most likely your SSH key needs re-adding. Try running:
    .\setup-ssh-github.ps1
and then run this script again.
"@
    exit 1
}
OK "Pushed. GitHub Actions is building the live site now."

# --- 7. Wait for THIS EXACT BUILD to appear on the live site ------------
# Vite stamps every build's JavaScript with a hash of its contents, e.g.
# index-DNyoMS_b.js. Reading that filename out of the freshly built
# dist\index.html and then waiting for the live server to serve that exact
# name is an unambiguous check: no phrase-matching, no guessing. An earlier
# version of this script looked for a sentence that had been on the page for
# many builds, so it reported success even when the site was stale.
Step 7 "Waiting for this exact build to go live..."
$asset = (Select-String -Path 'dist\index.html' -Pattern 'assets/index-[A-Za-z0-9_-]+\.js').Matches[0].Value
Write-Host "      this build is $asset" -ForegroundColor DarkGray

$live = $false
for ($i = 1; $i -le 20; $i++) {
    Start-Sleep -Seconds 15
    try {
        # cache-busting query, so we test the SERVER and not our own cache
        $u = "$SITE/$asset" + "?t=" + [guid]::NewGuid()
        $r = Invoke-WebRequest -Uri $u -UseBasicParsing -ErrorAction Stop
        if ($r.StatusCode -eq 200) { $live = $true; break }
    } catch { }
    Write-Host "      GitHub is still building... ($($i * 15)s)" -ForegroundColor DarkGray
}

Write-Host ""
if ($live) {
    Write-Host "SUCCESS - the live site is serving this build." -ForegroundColor Green
    Write-Host "If your browser still shows the old page, that is YOUR cache," -ForegroundColor Green
    Write-Host "not the server. Ctrl+Shift+R, or open it in an Incognito window." -ForegroundColor Green
} else {
    Write-Host "Pushed fine, but the live site is not serving this build yet." -ForegroundColor Yellow
    Write-Host "Check the build log:" -ForegroundColor Yellow
    Write-Host "  https://github.com/IreneMargherita/isf-website/actions"
    Write-Host ""
    Write-Host "On the FIRST deploy after switching to isfbeach.org, this can also" -ForegroundColor Yellow
    Write-Host "mean GitHub is still issuing the HTTPS certificate for the new" -ForegroundColor Yellow
    Write-Host "domain. That can take up to 24 hours. Check Settings > Pages." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Open it - and HARD-REFRESH with Ctrl+Shift+R, or your browser" -ForegroundColor Cyan
Write-Host "will keep showing you the cached old version:" -ForegroundColor Cyan
Write-Host "  $SITE"
Write-Host ""
