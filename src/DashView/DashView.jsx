

import React, { useContext, useState, useEffect } from 'react';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import reqCart from '../CartProvider/reqCart';
import { FaMoneyCheckAlt } from "react-icons/fa";
import { SiTrainerroad } from "react-icons/si";
import { SiGoogleclassroom } from "react-icons/si";

const DashView = () => {
  const [trainer, setTrainer] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const { user, userEmail,isAdmin } = useContext(AuthContext);
  const [reqData] = reqCart();

  useEffect(() => {
    if (user && userEmail && reqData) {
      const lowerCaseUserEmail = userEmail.toLowerCase();
      const matchedData = reqData.find(data => data.email.toLowerCase() === lowerCaseUserEmail);
      
      if (matchedData) {
        console.log('milse');
        
        if (matchedData.role === 'trainer') {
          setTrainer(true);
        }
      } else {
        console.log('Mile nai');
        setTrainer(false)
      }
  
      setLoading(false); 
    }
  }, [user, userEmail, reqData]);
  console.log(trainer)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <ul className="flex-grow">
         {isAdmin &&(
          <div className="div">
            <p className='mr-3" text-xl text-red-600 font-extrabold'>Admin Panel</p>
             <li className="p-4 flex items-center hover:bg-gray-700">
            <HiChartPie className="mr-3" /> Dashboard
          </li>
          <Link to='/AdminDashBoard/TrainerReq'>
            <li className="p-4 flex items-center hover:bg-gray-700">
              <HiInbox className="mr-3" />Applied Trainer
            </li>
          </Link>
          <Link to='/AdminDashBoard/AllUsers'>
            <li className="p-4 flex items-center hover:bg-gray-700">
              <HiUser className="mr-3" />Users
            </li>
          </Link>
          <Link to='/AdminDashBoard/AllTrainerAdmin'>
            <li className="p-4 flex items-center hover:bg-gray-700">
              <SiTrainerroad  className="mr-3" />All Trainer
            </li>
          </Link>
          <Link to='/AdminDashBoard/subscriber'>
            <li className="p-4 flex items-center hover:bg-gray-700">
              <HiUser className="mr-3" />All Subscriber
            </li>
          </Link>
          <Link to='/AdminDashBoard/balance'>
            <li className="p-4 flex items-center hover:bg-gray-700">
            <FaMoneyCheckAlt className="mr-3" />Balance
            </li>
          </Link>
          <Link to='/AdminDashBoard/addClasses'>
            <li className="p-4 flex items-center hover:bg-gray-700">
              <SiGoogleclassroom className="mr-3" />Add Classes
            </li>
          </Link>
          <Link to='/uploadpost'>
              <li className="p-4 flex items-center hover:bg-gray-700">
                Add New Post
              </li>
            </Link>
          </div>
         )}
          {trainer && (
            <div className="div">
              <p className='mr-3" text-xl text-red-600 font-extrabold'>Welcome Trainer</p>
              <Link to='/AdminDashBoard/manageSlot'>
              <li className="p-4 flex items-center hover:bg-gray-700">
                <HiUser className="mr-3" />Manage slot
              </li>
            </Link>
            <Link to='/AdminDashBoard/addnewslot'>
              <li className="p-4 flex items-center hover:bg-gray-700">
                <HiUser className="mr-3" />Add New Slot
              </li>
            </Link>
            <Link to="/uploadpost">
              <li className="p-4 flex items-center hover:bg-gray-700">
                Add New Post
              </li>
            </Link>
            </div>
           
          )}
        </ul>
      </div>
      <div className="flex-grow p-6">
       
      </div>
    </div>
  );
};

export default DashView;

