import React from 'react';
import { Link } from 'react-router';
import logo from "../assets/skillswap.jpg"
import userimg from "../assets/user.png"

const Navbar = () => {
    return (
        <>
       
        
<div className="relative flex justify-between items-center   p-2 px-5 shadow">
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
  <div className='login-btn flex gap-5'>
    <img src={userimg} alt="" />
    <button className='btn btn-secondary '>Login</button>
  </div>
</div>




     </>
    );
};

export default Navbar;