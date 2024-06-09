import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

  const {singInUser}=useContext(AuthContext);

  


  const handleLogIn=e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    singInUser(email,password)
    .then(result=>{
      console.log(result.user);
      toast.success("Successfully Logged In ")
      
     
    })
    .catch(error=>{
      console.log(error)
      toast.error("Failed to Logged In ")
     
    })


  }





  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-black text-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleLogIn}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-[#333333] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-700"
              type="submit"
            >
              Log In
            </button>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
            <NavLink to="/Register" className="inline-block align-baseline font-bold text-sm text-white underline hover:text-blue-800">
              Don't have an account?
            </NavLink>
          </div>
          <div className="flex items-center justify-center">
           
            <button
              className="bg-white text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center focus:outline-none focus:ring focus:border-blue-500 hover:bg-gray-200"
              type="button"
            >
              <FcGoogle className="mr-2" /> Login with Google
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
