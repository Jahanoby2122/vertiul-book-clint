// src/components/Footer.js
import React from 'react';
import img1 from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#f2f4fe] shadow-xl  text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section - spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img className='w-30' src={img1} alt="" />
            </div>
            <p className="mt-4 text-xl font-medium text-black">
              Virtual Libraries for  Science/History? 
            </p>
            <p className="mt-2 italic">
              Download books to read or listen without an internet connection, perfect for travel or commutes.
            </p>
        
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['Home', 'Browse Events', 'Event Organizers', 'My Bookings', 'See Profile'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white  mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'FAQs', 'Support', 'How it Works', 'Terms & Conditions'].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact section - placed on the right side */}
          <div className="lg:col-start-5">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@ah.com</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+580 124-56890</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Gaibandha, Bangladesh</span>
              </div>
            </div>
            
         
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© 2025 Book Press. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;