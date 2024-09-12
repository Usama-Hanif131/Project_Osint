import React from 'react'
import Header from './cmponents/Header/Header'
import Footer from './cmponents/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
