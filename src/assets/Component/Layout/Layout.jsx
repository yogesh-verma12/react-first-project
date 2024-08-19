import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Header/Nav'
import Fotter from '../Fotter/Fotter'
import Fotterwidget from '../Fotterweidget/Fotterwidget.jsx'

function Layout() {
  return (
   <>
    <Nav/>
    <Outlet/>
    <Fotterwidget/>
    <Fotter/>
   </>
  )
}

export default Layout
