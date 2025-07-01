import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
 
  RouterProvider,
} from "react-router";
import { router } from './Router/Router';
import AuthProvider from './Provider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <div className='min-h-screen'>
       <RouterProvider router={router} />
     </div>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
