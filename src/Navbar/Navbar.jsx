import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';import Register from '../Register/Register';


const Navbar = () => {


  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      toast.success("Successfully Logged out")
      setTimeout(() => {
        window.location.reload();
    }, 2000);
    })
    .catch(error=>{
      toast.error("Log Out Failed");
    })


  }

  console.log(user)

    const links=<>
    <li><NavLink to='/' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>Home</NavLink></li>
    <li><NavLink to='/AllClasses' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>All Classes</NavLink></li>
    <li><NavLink to='/AllTrainers' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>All Trainers</NavLink></li>
    <li><NavLink to='/BeATrainer' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>Apply</NavLink></li>
    <li><NavLink to='/AdminDashBoard' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>Dashboard</NavLink></li>
    
   
   </>





    return (
        <div className="navbar bg-transparent">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost bg-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-white gap-1">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">
    <div className="avatar">
    <div className="w-12">
      <img src="https://marketplace.canva.com/EAFMWRbCRm0/1/0/1600w/canva-red-black-minimalist-fitness-logo-dcYVFBq4DTg.jpg" />
    </div>
    </div>
      
      
        Fit Freak</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white gap-1">
        {links}
      
    </ul>
  </div>
  <div className="navbar-end">

  {
      user && <span>
      <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="image" className='border-2  bg-white' src={user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-[5]">
      <li>{user.displayName || 'Unknown'}</li>
        <li><NavLink to="/UserProfile">{user.email}</NavLink></li>
        <li><a onClick={handleLogOut}>Log out</a></li>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
      </ul>
    </div>
     
    
      
      </span>
      
    }
     {!user && (
       <div className="div gap-1">
         <>
          <NavLink to='/LogIn'> <a className="btn bg-[#333333] text-white">Log In</a></NavLink>
          <NavLink to='/Register'> <a className="btn bg-[#333333] text-white">Register</a></NavLink>
        </>
       </div>
      )}

  </div>
</div>
    );
};

export default Navbar;