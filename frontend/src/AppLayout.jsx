import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Hero2 from './pages/Hero2'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Pop from './components/Pop'

const AppLayout = () => {
  const {popshow , setpopshow , status } = useAuth();
  return (
    <>
      {popshow ? <><Pop status={status} handlepop={setpopshow}/></>:<></>}
      <div className="w-dvw h-fit relative overflow-hidden ">
        <Navbar />
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default AppLayout