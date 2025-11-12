import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/skillswap.jpg";
import userimg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = (event) => {
    event.preventDefault();
    signOut(auth).then(() => {
      setUser(null);
      navigate("/auth/login");
    });
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
          onClick={() => setIsMenuOpen(false)}
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/auth/skilldetails"
          onClick={() => setIsMenuOpen(false)}
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Skill Details
      </NavLink>
      <NavLink
        to="/auth/profile"
          onClick={() => setIsMenuOpen(false)}
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        My Profile
      </NavLink>
    </>
  );

  return (
    <nav className="shadow px-5 py-3 flex justify-between items-center relative bg-white">
      <div className="w-[100px]">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div className="hidden md:flex gap-6 font-semibold">{navLinks}</div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <img
              src={user.photoURL || userimg}
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
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
        <button
          className="md:hidden text-2xl ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoMdMenu />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
