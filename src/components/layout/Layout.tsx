import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import PageBackdrop from './PageBackdrop'
import QuestionnaireLauncher from '../ui/QuestionnaireLauncher'
import EventAlert from '../sections/EventAlert'

function PageLoader() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center" role="status" aria-live="polite">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      <span className="sr-only">Loading page…</span>
    </div>
  )
}

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <PageBackdrop />
      {/* Above the header on purpose: first thing on the page, on every route. */}
      <EventAlert />
      <Header />
      <main id="main" className="relative z-10 flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer className="relative z-10" />
      <QuestionnaireLauncher />
    </div>
  )
}
