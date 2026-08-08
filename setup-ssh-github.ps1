# ============================================================
# setup-ssh-github.ps1
# One-time SSH setup so `git push` authenticates as IreneMargherita.
#
# Run it from the ISF folder like this:
#   powershell -ExecutionPolicy Bypass -File .\setup-ssh-github.ps1
#
# What it does (and why):
#   1. Generates an SSH key pair ON THIS MACHINE (if you don't have one).
#      The PRIVATE key never leaves your computer — that's the whole
#      point of SSH. The PUBLIC key is like a padlock you hand to
#      GitHub; only your private key can open it.
#   2. Copies the public key to your clipboard and opens GitHub's
#      "SSH keys" settings page so you can paste it in.
#   3. Switches this repo's remote from HTTPS to SSH, so git stops
#      using the cached carolgudumotu credential entirely.
#   4. Tests the connection, then pushes.
# ============================================================

Set-Location $PSScriptRoot   # always operate in the ISF folder

$sshDir  = Join-Path $env:USERPROFILE ".ssh"
$keyFile = Join-Path $sshDir "id_ed25519"
$pubFile = "$keyFile.pub"

# --- Step 1: key pair -------------------------------------------------
if (!(Test-Path $sshDir)) { New-Item -ItemType Directory -Path $sshDir | Out-Null }

if (Test-Path $keyFile) {
    Write-Host "`nFound an existing SSH key at $keyFile - reusing it." -ForegroundColor Yellow
} else {
    Write-Host "`nGenerating your SSH key pair..." -ForegroundColor Cyan
    Write-Host "You'll be asked for a passphrase. Pressing Enter twice = no passphrase (fine for a personal laptop; you can add one later)." -ForegroundColor Cyan
    ssh-keygen -t ed25519 -C "caroleunicetr@gmail.com" -f $keyFile
    if (!(Test-Path $pubFile)) { Write-Host "Key generation didn't finish - run the script again." -ForegroundColor Red; exit 1 }
}

# --- Step 2: hand the public key to GitHub ----------------------------
Get-Content $pubFile | Set-Clipboard
Write-Host "`nYour PUBLIC key (already copied to clipboard - safe to share):" -ForegroundColor Green
Get-Content $pubFile
Write-Host @"

Opening GitHub's SSH key page in your browser now.
  * Make sure you are signed in as  IreneMargherita  (top-right avatar!)
  * Click 'New SSH key'
  * Title: anything, e.g. 'Carol laptop'
  * Key: paste with Ctrl+V
  * Click 'Add SSH key'
"@ -ForegroundColor Cyan
Start-Process "https://github.com/settings/keys"
Read-Host "`nPress Enter here AFTER the key is added on GitHub"

# --- Step 3: point this repo's remote at SSH instead of HTTPS ---------
git remote set-url origin git@github.com:IreneMargherita/isf-website.git
Write-Host "Remote now uses SSH:" -ForegroundColor Green
git remote -v

# --- Step 4: test, then push ------------------------------------------
Write-Host "`nTesting the connection (look for 'Hi IreneMargherita!')..." -ForegroundColor Cyan
ssh -o StrictHostKeyChecking=accept-new -T git@github.com

Write-Host "`nPushing the site..." -ForegroundColor Cyan
git push -u origin main

Write-Host @"

Done! If the push succeeded:
  * Watch the deploy:  https://github.com/IreneMargherita/isf-website/actions
  * Site (1-2 min):    https://irenemargherita.github.io/isf-website/
From now on, publishing an update is just:  git add .  ->  git commit -m "..."  ->  git push
"@ -ForegroundColor Green
