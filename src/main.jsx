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

import AllUsers from "./AllUsers/AllUsers";
import AdminDashBoard from "./AdminDashBoard.jsx/AdminDashBoard";
import TrainerReq from "./TrainerReq/TrainerReq";
import BeATrainer from "./BeATrainer/BeATrainer";
import ViewDetails from "./ViewDetails";
import TrainerBookingPage from "./TrainerBookingPage/TrainerBookingPage";
import AllTrainerAdmin from "./AllTrainerAdmin/AllTrainerAdmin";
import Subscriber from "./Subscriber/Subscriber";
import Payment from "./Payment/Payment";
import Balance from "./Balance/Balance";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddClasses from "./Addclasses/AddClasses";
import ManageSlot from "./ManageSlot/ManageSlot";
import AddNewSlot from "./AddNewSlot/AddNewSlot";
import Forum from "./Forum/Forum";
import NewPost from "./AddNewForum/NewPost";
import UploadAPost from "./AddNewForum/UploadAPost";

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
        path: "/BeATrainer",
        element:<PrivateRoute><BeATrainer></BeATrainer></PrivateRoute>,
      },
      {
        path: "/payment",
        element:<PrivateRoute><Payment></Payment></PrivateRoute>,
      },
      {
        path: "/forum",
        element:<Forum></Forum>
      },
     
      
     
   
  


    ]
  },
  {
    path: "/AdminDashBoard",
    element: <AdminDashBoard></AdminDashBoard>,
    children: [
      {
        path: "AllUsers", 
        element: <AllUsers></AllUsers>
      },
      {
        path: "/AdminDashBoard/TrainerReq",
        element: <TrainerReq></TrainerReq>

      },
      {
        path: "/AdminDashBoard/AllTrainerAdmin",
        element: <AllTrainerAdmin></AllTrainerAdmin>

      },
      {
        path: "/AdminDashBoard/subscriber",
        element: <Subscriber></Subscriber>

      },
      {
        path: "/AdminDashBoard/balance",
        element: <Balance></Balance>,

      },
      {
        path: "/AdminDashBoard/addClasses",
        element: <AddClasses></AddClasses>,

      },
      {
        path: "/AdminDashBoard/manageSlot",
        element:<ManageSlot></ManageSlot>

      },
      {
        path: "/AdminDashBoard/addnewslot",
        element:<AddNewSlot></AddNewSlot>,

      },
    ]
  },
  {
    path: "/uploadpost",
    element:<UploadAPost></UploadAPost>,

  },
  {
    path: "/ViewDetails/:id",
    element: <ViewDetails></ViewDetails>,
    loader:({params})=>fetch(`http://localhost:5000/request/${params.id}`)

  },
  {
    path: "/TrainerBookingPage/:id",
    element:<PrivateRoute><TrainerBookingPage></TrainerBookingPage></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:5000/request/${params.id}`)
  },
 

 
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
