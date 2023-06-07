import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBarComponent from './MainLayout/AppBar'
import SidebarComponent from './MainLayout/SideBar'

const MainLayout = () => {
  return (
    <>
      <AppBarComponent/>
      <SidebarComponent/>
      <Outlet/>
    </>
  )
}

export default MainLayout
