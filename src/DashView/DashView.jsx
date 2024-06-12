import React from 'react';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';

const DashView = () => {
 




    return (
        <div className="flex">
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
         
          <ul className="flex-grow">
            <li className="p-4 flex items-center hover:bg-gray-700">
              <HiChartPie className="mr-3" /> Dashboard
            </li>
           
           
            <Link to='/AdminDashBoard/TrainerReq'>
            <li className="p-4 flex items-center hover:bg-gray-700">
              <HiInbox className="mr-3" />Applied Trainer
            </li></Link>
            <Link to='/AdminDashBoard/AllUsers'><li className="p-4 flex items-center hover:bg-gray-700">
              <HiUser className="mr-3" />Users
            </li></Link>
            <Link to='/AdminDashBoard/AllTrainerAdmin'><li className="p-4 flex items-center hover:bg-gray-700">
              <HiUser className="mr-3" />All Trainer
            </li></Link>
            <Link to='/AdminDashBoard/subscriber'><li className="p-4 flex items-center hover:bg-gray-700">
              <HiUser className="mr-3" />All Subscriber
            </li></Link>
            <Link to='/AdminDashBoard/balance'><li className="p-4 flex items-center hover:bg-gray-700">
              <HiUser className="mr-3" />Balance
            </li></Link>
            
           
            
            
          </ul>
        </div>
        <div className="flex-grow p-6">
         
        </div>
        
      </div>
    );
};

export default DashView;