import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AppLayout = () => {
  return (
    <>
    <ScrollRestoration/>
    <Navbar/>
    {/* <AppSidebar/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout