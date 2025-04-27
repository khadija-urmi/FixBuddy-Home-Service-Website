import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../page/Home/Home";
import LogIn from "../page/LogIn/LogIn";
import Register from "../page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../page/AddService/AddService";
import AllServices from "../page/AllServices/AllServices";
import ServiceDetail from "../page/ServiceDetail/ServiceDetail";
import ManageService from "../page/ManageService/ManageService";
import BookedServices from "../page/BookedServices/BookedServices";
import ContactUs from "../page/ContactUs/ContactUs";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import BlogDetails from "../page/BlogDetails/BlogDetails";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Profile from "../page/Profile/Profile";
import Dashboard from "../page/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
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
        path: "blog/:blogId",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://home-repair-server.vercel.app/services/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch service details");
          }
          return response.json();
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "manageService",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "bookedServices",
        element: (
          <PrivateRoute>
            <BookedServices></BookedServices>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
