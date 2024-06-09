import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayOut from "./MainLayOut/MainLayOut";
import Home from "./Home/Home";
import AllClasses from "./AllClasses/AllClasses";
import LogIn from "./LogIn/LogIn";
import Register from "./Register/Register";
import AllTrainers from "./LogIn/AllTrainers";
import AuthProvider from "./AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/AllClasses",
        element:<AllClasses></AllClasses>
      },
      {
        path: "/LogIn",
        element:<LogIn></LogIn>
      },
      {
        path: "/Register",
        element:<Register></Register>
      },
      {
        path: "/AllTrainers",
        element:<AllTrainers></AllTrainers>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider><RouterProvider router={router} /></AuthProvider>
</React.StrictMode>
);
