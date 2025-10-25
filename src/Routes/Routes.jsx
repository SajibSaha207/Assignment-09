import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Loading from "../Pages/Loading";

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
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/",
                element:  <Home></Home>,
                loader:  () => fetch("/public/skill.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
        ]
        
    }
])

export default router;