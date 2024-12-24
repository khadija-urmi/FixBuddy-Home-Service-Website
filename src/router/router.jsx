import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../page/Home/Home";
import LogIn from "../page/LogIn/LogIn";
import Register from "../page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../page/AddService/AddService";
import AllServices from "../page/AllServices/AllServices";


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
            path: "/addService",
            element: <PrivateRoute>
                <AddService></AddService>
            </PrivateRoute>
        },
        {
            path: "/allServices",
            element: <AllServices></AllServices>,
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        ],
    }
])

export default router;