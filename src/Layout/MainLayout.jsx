import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';





const MainLayout = () => {
    return (
        <div className='bg-[#f2f4f8] flex flex-col min-h-screen'>
         
            <Navbar></Navbar>
           
           <main className='flex-grow'>
                    <Outlet></Outlet>
           </main>
        
            <Footer></Footer>
           
           
        </div>
    );
};

export default MainLayout;