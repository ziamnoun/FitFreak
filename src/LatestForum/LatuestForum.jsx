import React from 'react';
import posrCart from '../CartProvider/posrCart';

const LatestForum = () => {
    const [postData] = posrCart();

   
    const latestPosts = postData.slice(0, 4);

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Latest Forum Posts</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {latestPosts.map((post, index) => (
                    <div key={index} className="bg-black rounded-lg shadow-lg p-4 text-white">
                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-400">{post.content.slice(0, 50)}...</p>
                        <button className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md mt-4 hover:bg-blue-600 transition duration-300">
                            Explore More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestForum;

