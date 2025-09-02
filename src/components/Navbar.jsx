import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { IoIosHome } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import logoImg from '../assets/logo.png';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import ThemeToggle from '../Pages/ThemeToggle';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(result => {
        console.log(result);
        navigate('/');
        toast.error("SignOut successfully");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const linkis = <>
    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#1E75CC] text-xl' : 'text-xl'}><IoIosHome /> Home</NavLink></li>
    <li><NavLink to={'/bookshelf'} className={({ isActive }) => isActive ? 'text-[#1E75CC] text-xl' : 'text-xl'}><IoBookSharp /> Bookshelf</NavLink></li>
    <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-[#1E75CC] text-xl' : 'text-xl'}><IoBookSharp /> About</NavLink></li>
    {user && <li><NavLink to={'/addbook'} className={({ isActive }) => isActive ? 'text-[#1E75CC] text-xl' : 'text-xl'}><IoMdAddCircle /> Add Book</NavLink></li>}
    {user &&<li><NavLink to={'/mybook'} className={({ isActive }) => isActive ? 'text-[#1E75CC] text-xl' : 'text-xl'}><ImBook /> My Book</NavLink></li>}
    {user && <li><NavLink to={'/profile'} className={({ isActive }) => isActive ? 'text-[#1E75CC] text-xl' : 'text-xl'}><FaRegUserCircle /> Profile</NavLink></li>}
    {/* <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-[#1E75CC] text-xl' : 'text-xl'}><FaRegUserCircle /> About</NavLink></li> */}
  </>;

  return (
    <div className="w-full bg-gradient-to-r from-blue-100 via-white to-purple-100 border-b border-[#9128fb] shadow z-50 fixed top-0 left-0">
      <div className="navbar max-w-7xl mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {linkis}
            </ul>
          </div>
          <img className='w-[120px]' src={logoImg} alt="Logo" />
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {linkis}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end space-x-2">
          {/* <ThemeToggle></ThemeToggle> */}
          {
            user ? (
              <button onClick={handleLogout} className='btn btn-primary bg-white shadow-xl text-black'>Logout</button>
            ) : (
              <div className="flex gap-2">
                <Link className='btn btn-primary bg-white shadow-xl text-black' to={`/auth/signup`}>Signup</Link>
                <Link className='btn btn-primary bg-white shadow-xl text-black' to={`/auth/login`}>Login</Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
