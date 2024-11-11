// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import toast, { Toaster } from 'react-hot-toast';import Register from '../Register/Register';


// const Navbar = () => {


//   const {user,logOut}=useContext(AuthContext);
//   const handleLogOut=()=>{
//     logOut()
//     .then(()=>{
//       toast.success("Successfully Logged out")
//       setTimeout(() => {
//         window.location.reload();
//     }, 2000);
//     })
//     .catch(error=>{
//       toast.error("Log Out Failed");
//     })


//   }

//   console.log(user)

//     const links=<>
//     <li><NavLink to='/' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>Home</NavLink></li>
//     <li><NavLink to='/AllClasses' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>All Classes</NavLink></li>
//     <li><NavLink to='/AllTrainers' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>All Trainers</NavLink></li>
//     <li><NavLink to='/BeATrainer' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>Be a Trainer</NavLink></li>
//     <li><NavLink to='/booktrainer' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>Booked Trainer</NavLink></li>
//     <li><NavLink to='/forum' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>Forum Page</NavLink></li>
//     <li><NavLink to='/AdminDashBoard' className={({isActive})=> isActive?  'border-solid border-2 border-white bg-base-50   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white' :' border-2 text-white'}>Dashboard</NavLink></li>
    
    
   
//    </>





//     return (
//         <div className="navbar bg-transparent">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost bg-white lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-white gap-1">
//       {links}
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl text-white">
//     <div className="avatar">
//     <div className="w-12">
//       <img src="https://marketplace.canva.com/EAFMWRbCRm0/1/0/1600w/canva-red-black-minimalist-fitness-logo-dcYVFBq4DTg.jpg" />
//     </div>
//     </div>
      
      
//         Fit Freak</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1 text-white gap-1">
//         {links}
      
//     </ul>
//   </div>
//   <div className="navbar-end">

//   {
//       user && <span>
//       <div className="dropdown dropdown-end ">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img alt="image" className='border-2  bg-white' src={user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
//         </div>
//       </div>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-[5]">
//       <li>{user.displayName || 'Unknown'}</li>
//         <li><NavLink to="/UserProfile">{user.email}</NavLink></li>
//         <li>Last Login: {user.metadata.lastSignInTime}</li>
//         <li><a onClick={handleLogOut}>Log out</a></li>
//         <Toaster
//   position="top-right"
//   reverseOrder={false}
// />
//       </ul>
//     </div>
     
    
      
//       </span>
      
//     }
//      {!user && (
//        <div className="div gap-1">
//          <>
//           <NavLink to='/LogIn'> <a className="btn bg-[#333333] text-white">Log In</a></NavLink>
//           <NavLink to='/Register'> <a className="btn bg-[#333333] text-white">Register</a></NavLink>
//         </>
//        </div>
//       )}

//   </div>
// </div>
//     );
// };

// export default Navbar;


import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged out");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(() => {
        toast.error("Log Out Failed");
      });
  };

  const links = (
    <>
      <li><NavLink to='/' className="nav-link">Home</NavLink></li>
      <li><NavLink to='/AllClasses' className="nav-link">All Classes</NavLink></li>
      <li><NavLink to='/AllTrainers' className="nav-link">All Trainers</NavLink></li>
      <li><NavLink to='/BeATrainer' className="nav-link">Be a Trainer</NavLink></li>
      <li><NavLink to='/booktrainer' className="nav-link">Booked Trainer</NavLink></li>
      <li><NavLink to='/forum' className="nav-link">Forum Page</NavLink></li>
      <li><NavLink to='/AdminDashBoard' className="nav-link">Dashboard</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost bg-transparent p-1 lg:p-3 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={0} className="menu menu-sm z-[2] dropdown-content mt-3 p-2 shadow bg-black rounded-box w-40 lg:w-52 text-white gap-1">
            {links}
            {!user && (
              <div className="flex flex-col gap-1 mt-2">
                <NavLink to='/LogIn' className="btn btn-sm bg-[#333333] text-white">Log In</NavLink>
                <NavLink to='/Register' className="btn btn-sm bg-[#333333] text-white">Register</NavLink>
              </div>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg lg:text-xl text-white flex items-center">
          <div className="avatar">
            <div className="w-8 lg:w-12">
              <img src="https://marketplace.canva.com/EAFMWRbCRm0/1/0/1600w/canva-red-black-minimalist-fitness-logo-dcYVFBq4DTg.jpg" alt="Logo" />
            </div>
          </div>
          Fit Freak
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white gap-1">
          {links}
        </ul>
      </div>

      <div className="relative navbar-end flex items-center gap-2">
        {user ? (
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-8 lg:w-10 rounded-full">
                <img alt="User avatar" className='border-2 bg-white' src={user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 lg:w-52">
              <li>{user.displayName || 'Unknown'}</li>
              <li><NavLink to="/UserProfile">{user.email}</NavLink></li>
              <li>Last Login: {user.metadata.lastSignInTime}</li>
              <li><button onClick={handleLogOut}>Log out</button></li>
            </ul>
          </div>
        ) : (
          <div className="hidden lg:flex gap-1">
            <NavLink to='/LogIn'><button className="btn bg-[#333333] text-white px-3 lg:px-5">Log In</button></NavLink>
            <NavLink to='/Register'><button className="btn bg-[#333333] text-white px-3 lg:px-5">Register</button></NavLink>
          </div>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Navbar;

