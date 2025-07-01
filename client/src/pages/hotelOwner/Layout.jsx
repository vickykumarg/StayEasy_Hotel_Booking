import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/hotelOwner/Sidebar'
import Navbar from '../../components/hotelOwner/Navbar'
import { useAppContext } from '../../context/AppContext'
import { useEffect } from 'react'

const Layout = () => {

  const {isOwner,navigate}=useAppContext();

  useEffect(()=>{
    if(!isOwner){
      navigate('/');
    }
  },[isOwner])

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 py-10'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}


export default Layout
