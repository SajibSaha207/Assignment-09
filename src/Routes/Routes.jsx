import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Loading from "../Pages/Loading";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import SkillDetails from "../Pages/SkillDetails";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Pages/ForgetPassword";
import SkillDescription from "../Pages/SkillDescription";
 

export const router = createBrowserRouter([
  
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
  path: "/auth/forget",
  element: <ForgetPassword />,
},

       {
        path: "profile",
        element: <Profile></Profile>,
      },
          {
        path: "skilldetails",
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
        loader:()=>fetch('/skill.json'),
      },
      {
  path: "skill-description/:id",
  element: (
    <PrivateRoute>
      <SkillDescription />
    </PrivateRoute>
  ),
  loader: () => fetch("/skill.json"),
},

      
       
    ],
  },
]);

export default router;
