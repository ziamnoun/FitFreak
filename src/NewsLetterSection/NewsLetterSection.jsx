import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const NewsLetterSection = () => {
  

    // const handleChange = (e) => {
      
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name=e.target.name.value;

        const SubsData={email,name}

        fetch('https://final-project-fit-server.vercel.app/subscriber', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(SubsData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                   
                  //   setTimeout(() => {
                  //     window.location.reload();
                  // }, 2000);
                  console.log("Added data")
                  toast.success('Successfully Subscribed!');
                
                }
                else{console.log('fail')}
    
            });






    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Subscribe to our Newsletter</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-400 mb-2" htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Your Name" 
                             
                            
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Your Email" 
                            
                           
                            required 
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe Now</button>
                    </div>
                </form>
            </div>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </div>
    );
};

export default NewsLetterSection;