import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-100 via-white to-purple-100 py-10 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
                
                {/* Logo */}
                <div>
                    <NavLink to="/" className="text-3xl font-extrabold text-blue-500">BookPress</NavLink>
                    <p className="text-blue-500 mt-3 font-medium">
                         At VirtualBook Shelf, we believe that learning is the key to personal and professional growth.
                    </p>
                    <div className="flex gap-4 mt-5 text-blue-500 text-xl">
                        <NavLink to='https://web.facebook.com/Akashahamed2122'><FaFacebookF /></NavLink>
                        <NavLink ><FaInstagram /></NavLink>
                        <NavLink to='https://github.com/Akashahamed2122?'><FaGithub /></NavLink>
                        <NavLink > <FaTwitter /></NavLink>
                    </div>
                </div>

                {/*  Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-blue-900 font-medium">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/bookshelf">Book Shelf</NavLink></li>
                        <li><NavLink to="/addbook">Add Book</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </ul>
                </div>

                {/* support */}
                <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-4">Support</h3>
                    <ul className="space-y-2 text-blue-900 font-medium">
                        <li><NavLink to="/">FAQ</NavLink></li>
                        <li><NavLink to="/feedback">Feedback</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-10 text-blue-800 font-medium">
                © 2025 BookPress. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
