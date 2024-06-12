import React, { useContext} from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const {createUser}=useContext(AuthContext)


  const handleRegister=e=>{

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
  

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        return updateProfile(result.user, { photoURL: photoUrl });
       
      })
      .then(() => {
        toast.success('Successfully Registered');
     
       
      })
      .catch((error) => {
        console.error(error);
       
        toast.error('Failed to Register');
      });

      const userData={email,password,photoUrl}
      fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
               
              //   setTimeout(() => {
              //     window.location.reload();
              // }, 2000);
              console.log("Added data")
            
            
            }
            else{console.log('fail')}

        });




    }





  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-black text-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
        <form onSubmit={handleRegister}>
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
         
        
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-[#333333] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-700"
             type="submit"
            >
              Register
            </button>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
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
