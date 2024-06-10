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
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import AdminDashBoard from "./AdminDashBoard.jsx/AdminDashBoard";
import AllUsers from "./AllUsers/AllUsers";

const queryClient = new QueryClient()

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
      },
      {
        path: "/AdminDashBoard",
        element:<AdminDashBoard></AdminDashBoard>
      }


    ]
  },
  {
    path: "/AllUsers",
    element:<AllUsers></AllUsers>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
    </QueryClientProvider>
   
    </AuthProvider>
</React.StrictMode>
);
