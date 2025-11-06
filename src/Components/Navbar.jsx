 
import { Link } from 'react-router';
import logo from "../assets/skillswap.jpg"
import userimg from "../assets/user.png"
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    // const { user } = use(AuthContext); 
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
    <Link to='/auth/skilldetails'>Skill Details</Link>
    <Link to="/auth/profile">My Profile</Link>
  </div>
  <div className='login-btn flex gap-5'>
    <img src={userimg} alt="" />
    {/* {user ? " " : } */}
    <Link to="/auth/login" className='btn btn-secondary '>Login</Link>
  </div>
</div>




     </>
    );
};

export default Navbar;