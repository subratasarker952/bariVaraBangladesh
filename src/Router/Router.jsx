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
import AddProperty from "../Pages/UserPages/AddProperty/AddProperty";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Privacy from "../Pages/Privacy/Privacy";
import MyProperty from "../Pages/UserPages/MyProperty/MyProperty";
import Terms from "../Pages/terms/Terms";
import EditeProperty from "../Pages/UserPages/EditeProperty/EditeProperty";
import PaymentCancel from "../Pages/Payment/PaymentCancel";
import PaymentFail from "../Pages/Payment/PaymentFail";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";

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
        path: "/properties/:id",
        element: <SinglePropertyPage />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/properties/${params.id}`
          ),
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
        element: <About />,
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
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/paymentSuccess",
        element: <PaymentSuccess />,
      },
      {
        path: "/paymentCancel",
        element: <PaymentCancel />,
      },
      {
        path: "/paymentFail",
        element: <PaymentFail />,
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
        element: <AddProperty />,
      },
      {
        path: "editProperty/:id",
        element: <EditeProperty />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/properties/${params.id}`
          ),
      },
      {
        path: "myProperty",
        element: <MyProperty />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
