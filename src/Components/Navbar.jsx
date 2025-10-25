import React from 'react';
import { Link } from 'react-router';
import logo from "../assets/skillswap.jpg"

const Navbar = () => {
    return (
        <>
       
        
<div className="relative flex items-center border p-2 px-5">
  {/* Logo left */}
  <div className="w-[100px]">
    <img src={logo} alt="Logo" className="w-full"/>
  </div>

  {/* Links centered */}
  <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-5 font-semibold">
    <Link to='/'>Home</Link>
    <Link to='/about us'>About Us</Link>
    <Link to='/profile'>My Profile</Link>
  </div>
</div>



     </>
    );
};

export default Navbar;