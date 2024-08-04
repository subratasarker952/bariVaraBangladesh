import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Components/SharedComponent/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UserLayout from "../Layouts/UserLayout";
import MainLayout from "../Layouts/MainLayout";
import DashboardHome from "../Pages/UserPages/DashboardHome";
import Profile from "../Pages/UserPages/Profile/Profile";
import EditProfile from "../Pages/UserPages/Profile/EditProfile";
import ListingsPage from "../Pages/ListingPage/ListingPage";
import SinglePropertyPage from "../Components/HomePageCom/SinglePropertyPage";
import AddEditListingPage from "../Pages/UserPages/AddEditListingPage/AddEditListingPage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Privacy from "../Pages/Privacy/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listing",
        element: <ListingsPage />,
      },
      {
        path: "/property/:id",
        element: <SinglePropertyPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <UserLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "editProfile/:id",
        element: <EditProfile />,
        loader: ({ params }) =>
          fetch(
            `https://digitalfurnitureserver.vercel.app/users/get/${params.id}`
          ),
      },
      {
        path: "addProperty",
        element: <AddEditListingPage />,
      },
      {
        path: "editProperty",
        element: <AddEditListingPage />,
      },
      {
        path: "editProperty/:id",
        element: <AddEditListingPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
