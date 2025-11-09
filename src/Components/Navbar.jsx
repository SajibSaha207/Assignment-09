 
import { Link, useNavigate } from 'react-router';
import logo from "../assets/skillswap.jpg"
import userimg from "../assets/user.png"
import { AuthContext } from "../Provider/AuthProvider";
import {  useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext); 
    const navigate = useNavigate();


    const handleLogout = (event)=>{
      event.preventDefault();
      signOut(auth)
      .then(()=>{
         setUser(null);
      navigate("/auth/login");
      });
   

 

      // setUser(false);


    };
    return (
        <>
       
        
<div className="relative flex justify-between items-center   p-2 px-5 shadow">
  {/* Logo left */}
  <div className="w-[100px]">
    <img src={logo} alt="Logo" className="w-full"/>
  </div>

  {/* Links centered */}
  {/* <div className=''>{user && user.email}</div> */}
  <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-5 font-semibold">
    <Link to='/'>Home</Link>
    <Link to="/auth/skilldetails">Skill Details</Link>
    <Link to="/auth/profile">My Profile</Link>
  </div>
 <div className='login-btn flex gap-5'>
  {user ? (
    <>
   
      <img
        src={user.photoURL || userimg}
        alt=""
        className="rounded cursor-pointer w-10 h-10"
        title={user?.displayName || "User"}
      />

       
      <button onClick={handleLogout} className="btn btn-secondary">
        Logout
      </button>
    </>
  ) : (
    <>
    
      <Link to="/auth/login" className="btn btn-secondary">
        Login
      </Link>

     
      <Link to="/auth/signup" className="btn btn-secondary">
        Sign Up
      </Link>
    </>
  )}




            
   
  </div>
</div>






     </>
    );
};

export default Navbar;