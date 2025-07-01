import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';




const MainLayout = () => {
    return (
        <div className='bg-[#f2f4f8] min-h-screen'>
         
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
            <Outlet></Outlet>
           
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;