import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../page/Home/Home";
import LogIn from "../page/LogIn/LogIn";
import Register from "../page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../page/AddService/AddService";
import AllServices from "../page/AllServices/AllServices";
import ServiceDetail from "../page/ServiceDetail/ServiceDetail";
import ManageService from "../page/ManageService/ManageService";
import BookedServices from "../page/BookedServices/BookedServices";
import Dashboard from "../page/Dashboard/Dashboard";
import ContactUs from "../page/ContactUs/ContactUs";
import Blog from "../page/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        meta: { title: "Home - FixBuddy" },
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
        meta: { title: "LogIn" },
      },
      {
        path: "contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
        meta: { title: "Add Service" },
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
        meta: { title: "AllService" },
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
        ),
        meta: { title: "ServiceDetail" },
        loader: async ({ params }) => {
          const response = await fetch(`
https://home-repair-server.vercel.app/services/${params.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch movies");
          }
          return response.json();
        },
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        meta: { title: "Dashboard" },
      },
      {
        path: "/manageService",
        element: <ManageService></ManageService>,
        meta: { title: "ManageService" },
      },
      {
        path: "/bookedServices",
        element: <BookedServices></BookedServices>,
        meta: { title: "BookedServices" },
      },
      {
        path: "/register",
        element: <Register></Register>,
        meta: { title: "Register" },
      },
    ],
  },
]);

export default router;
