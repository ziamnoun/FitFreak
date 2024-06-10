import React from 'react';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import DashView from '../DashView/DashView';
import Navbar from '../Navbar/Navbar';


const AdminDashBoard = () => {
    const isDashBoard=location.pathname==='/AdminDashBoard';




    return (

<div className="div">
{isDashBoard && (
    <div 
        className="min-h-screen bg-cover bg-center"
        style={{ 
            backgroundImage: "url('https://i.ibb.co/rQr2ZL1/rm314-bb-18.jpg')" 
        }}
    >
       
        <div className="grid grid-cols-6">
            <DashView className="col-span-1" />
            <div className="col-span-5">
                <Outlet />
            </div>
        </div>
        
    </div>
)}
</div>


    );
};

export default AdminDashBoard;


