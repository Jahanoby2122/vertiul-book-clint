import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { BiSolidBookAlt } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="bg-[#e6f2ff] dark:bg-[#1a365d] py-16 border-t border-[#cce0ff] dark:border-[#2c5282]">
            <div className="max-w-7xl mx-auto px-5">
                {/* Upper Footer Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    
                    {/* Brand Info */}
                    <div className="space-y-5">
                        <NavLink to="/" className="flex items-center text-3xl font-bold text-[#0056b3] dark:text-[#63b3ed]">
                            <BiSolidBookAlt className="mr-2" />
                            <span>BookPress</span>
                        </NavLink>
                        <p className="text-[#2c5282] dark:text-[#ebf8ff] leading-relaxed">
                            Your ultimate digital bookshelf. Discover, organize and enjoy your favorite books in one place.
                        </p>
                        <div className="flex gap-4 text-[#2c5282] dark:text-[#ebf8ff] text-lg">
                            <a href="https://facebook.com" className="hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="https://instagram.com" className="hover:text-[#d63384] dark:hover:text-[#f687b3] transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="https://github.com" className="hover:text-[#2d3748] dark:hover:text-white transition-colors">
                                <FaGithub />
                            </a>
                            <a href="https://twitter.com" className="hover:text-[#3182ce] dark:hover:text-[#90cdf4] transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-[#2b6cb0] dark:hover:text-[#4299e1] transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#2c5282] dark:text-[#ebf8ff] mb-5 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><NavLink to="/" className="text-[#2c5282] dark:text-[#ebf8ff] hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors flex items-center">Home</NavLink></li>
                            <li><NavLink to="/bookshelf" className="text-[#2c5282] dark:text-[#ebf8ff] hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors flex items-center">My Bookshelf</NavLink></li>
                            <li><NavLink to="/discover" className="text-[#2c5282] dark:text-[#ebf8ff] hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors flex items-center">Discover Books</NavLink></li>
                            <li><NavLink to="/categories" className="text-[#2c5282] dark:text-[#ebf8ff] hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors flex items-center">Categories</NavLink></li>
                            <li><NavLink to="/authors" className="text-[#2c5282] dark:text-[#ebf8ff] hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors flex items-center">Popular Authors</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#2c5282] dark:text-[#ebf8ff] mb-5 uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-4 text-[#2c5282] dark:text-[#ebf8ff]">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-[#0056b3] dark:text-[#63b3ed]" />
                                <span>123 Book Street, Knowledge City, 12345</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-3 text-[#0056b3] dark:text-[#63b3ed]" />
                                <span>+1 (123) 456-7890</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-[#0056b3] dark:text-[#63b3ed]" />
                                <span>support@bookpress.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#2c5282] dark:text-[#ebf8ff] mb-5 uppercase tracking-wider">Newsletter</h3>
                        <p className="text-[#2c5282] dark:text-[#ebf8ff] mb-4">
                            Subscribe to get updates on new books and special offers.
                        </p>
                        <form className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="px-4 py-2 w-full rounded-l-md border border-r-0 border-[#a4cafe] dark:border-[#2b6cb0] focus:outline-none focus:ring-2 focus:ring-[#0056b3] dark:bg-[#2a4365] text-[#2c5282] dark:text-[#ebf8ff]"
                                required
                            />
                            <button 
                                type="submit" 
                                className="bg-[#0056b3] hover:bg-[#004494] text-white px-4 py-2 rounded-r-md transition-colors flex items-center"
                            >
                                <FaPaperPlane className="mr-2" />
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Lower Footer Section */}
                <div className="pt-8 border-t border-[#cce0ff] dark:border-[#2c5282] flex flex-col md:flex-row justify-between items-center">
                    <div className="text-[#4a6fa5] dark:text-[#a0c4ff] text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} BookPress. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm">
                        <NavLink to="/privacy" className="text-[#4a6fa5] dark:text-[#a0c4ff] hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors">
                            Privacy Policy
                        </NavLink>
                        <NavLink to="/terms" className="text-[#4a6fa5] dark:text-[#a0c4ff] hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors">
                            Terms of Service
                        </NavLink>
                        <NavLink to="/cookies" className="text-[#4a6fa5] dark:text-[#a0c4ff] hover:text-[#0056b3] dark:hover:text-[#63b3ed] transition-colors">
                            Cookie Policy
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;