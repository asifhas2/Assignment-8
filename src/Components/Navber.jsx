import React from 'react';
import logo from '../assets/logo.png'
import gitLogo from '../assets/fi_2111432.png'
import { Link, Links, NavLink } from 'react-router';
const Navber = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm md:px-8 lg:12 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to='/' className={({isActive})=>isActive ?"mr-5 text-[18px] font-semibold text-purple-500 underline":"mr-5 text-[18px] font-semibold" }>Home</NavLink>

      <NavLink to='/apps' className={({isActive})=>isActive ?"mr-5 text-[18px] font-semibold text-purple-500 underline":"mr-5 text-[18px] font-semibold" }>Apps</NavLink>
      <NavLink to='/installation' className={({isActive})=>isActive ?"mr-5 text-[18px] font-semibold text-purple-500 underline":"mr-5 text-[18px] font-semibold" }>Installation</NavLink>
      </ul>
    </div>
   <Link to='/'>
        <div className='flex justify-center items-center'>
        <div>
           <img className=' md:h-[40px] w-[40px]' src={logo} alt="" />
        </div>
        <div>
             <h1 className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent md:text-2xl font-bold'>
  APP-STORE.IO
            </h1>
        </div>
   </div>
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink to='/' className={({isActive})=>isActive ?"mr-5 text-[18px] font-semibold text-purple-500 underline":"mr-5 text-[18px] font-semibold" }>Home</NavLink>

      <NavLink to='/apps' className={({isActive})=>isActive ?"mr-5 text-[18px] font-semibold text-purple-500 underline":"mr-5 text-[18px] font-semibold" }>Apps</NavLink>
      <NavLink to='/installation' className={({isActive})=>isActive ?"mr-5 text-[18px] font-semibold text-purple-500 underline":"mr-5 text-[18px] font-semibold" }>Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end"> 
      
      <a
  href="https://github.com/asifhas2"
  target="_blank"
  rel="noopener noreferrer"
  className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
>
  <img className="w-5 h-5" src={gitLogo} alt="" />
  <h1 className="text-[18px] font-semibold text-white text-center">
    Contribute
  </h1>
</a>
  
   
  </div>
</div>
    );
};

export default Navber;