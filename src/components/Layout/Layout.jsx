import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  
  return (
    <>
      <Navbar />
      <main className={`${location.pathname === '/' ? '' : 'pt-32'}`}>
        <div className="bg-radial-glow">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}