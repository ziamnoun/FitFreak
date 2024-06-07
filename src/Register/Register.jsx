import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-black text-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
        <form>
        <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="photoUrl">
              Photo URL
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="photoUrl"
              placeholder="Photo URL"
            />
          </div>
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
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-[#333333] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-700"
              type="button"
            >
              Register
            </button>
            <NavLink to='/LogIn' className="inline-block align-baseline font-bold text-sm text-white underline hover:text-blue-800">
              Already have an account?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
