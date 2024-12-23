import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../page/Home/Home";
import LogIn from "../page/LogIn/LogIn";
import Register from "../page/Register/Register";
import Service from "../page/Service/Service";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [{
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
        {
            path: "/service",
            element: <Service></Service>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        ],
    }
])

export default router;