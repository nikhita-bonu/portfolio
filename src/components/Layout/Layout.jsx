import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'

export default function Layout() {
  const location = useLocation()
  
  useEffect(() => {
    // Ensure the window scrolls to the top whenever the route/pathname changes
    // This fixes navigation that lands the user in the middle of a page.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="bg-radial-glow min-h-screen">
      <Navbar />
      <main className={`${location.pathname === '/' ? '' : 'pt-32'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}