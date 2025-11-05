import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Loading from "../Pages/Loading";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import AboutUs from "../Pages/AboutUs";

export const router = createBrowserRouter([
  // 🏠 Main site layout (with Navbar, Hero, Footer)
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
         {
        path: 'login',
        element: <Login></Login>,
      },
  
      {
        path: "home",
        element: <Home></Home>,
        loader: () => fetch("/skill.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
        
    ],
  },

  // 🔑 Auth layout (NO Navbar, NO Hero, NO Footer)
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/signup',
        element: <SignUp></SignUp>,
      },
       {
        path: "profile",
        element: <Profile></Profile>,
      },
       {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
      },
       
    ],
  },
]);

export default router;
