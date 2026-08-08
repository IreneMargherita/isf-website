import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Every page is code-split and lazy-loaded; the <Suspense> boundary lives
// in Layout so the header/footer stay put while a page chunk loads.
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Connection = lazy(() => import('./pages/Connection'))
const Gallery = lazy(() => import('./pages/Gallery'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
