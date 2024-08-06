import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const adminToken=localStorage.getItem('adminToken');
    let verifyAdmin = false;
    if(adminToken){
      verifyAdmin = true;
    }
    console.log(`verifyAdmin is - ${verifyAdmin}`)
  return (
    verifyAdmin ? <Outlet/>:<Navigate to={'/'}/>
  )
}

export default PrivateRoutes