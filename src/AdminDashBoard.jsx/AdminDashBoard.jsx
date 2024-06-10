import React from 'react';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {
    return (
        <div className="flex">
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
       
        <ul className="flex-grow">
          <li className="p-4 flex items-center hover:bg-gray-700">
            <HiChartPie className="mr-3" /> Dashboard
          </li>
         
          <li className="p-4 flex items-center hover:bg-gray-700">
            <HiInbox className="mr-3" /> Inbox
          </li>
          <Link to='/AllUsers'><li className="p-4 flex items-center hover:bg-gray-700">
            <HiUser className="mr-3" />Users
          </li></Link>
          <li className="p-4 flex items-center hover:bg-gray-700">
            <HiShoppingBag className="mr-3" /> Products
          </li>
          <li className="p-4 flex items-center hover:bg-gray-700">
            <HiArrowSmRight className="mr-3" /> Sign In
          </li>
          <li className="p-4 flex items-center hover:bg-gray-700">
            <HiTable className="mr-3" /> Sign Up
          </li>
        </ul>
      </div>
      <div className="flex-grow p-6">
        {/* Your main content goes here */}
      </div>
    </div>
    );
};

export default AdminDashBoard;


