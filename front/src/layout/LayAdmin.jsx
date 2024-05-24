import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function LayAdmin() {
  return (
    <div>
          <AdminNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayAdmin