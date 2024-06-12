
import React, { useState } from 'react';
import posrCart from '../CartProvider/posrCart';

const Forum = () => {
    const [postData, setPostData] = posrCart();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postData.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(postData.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleUpvote = (index) => {
        const newPosts = [...postData];
        newPosts[indexOfFirstPost + index].votes += 1;
        setPostData(newPosts);
    };

    const handleDownvote = (index) => {
        const newPosts = [...postData];
        newPosts[indexOfFirstPost + index].votes -= 1;
        setPostData(newPosts);
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-white">
            <h1 className="text-3xl font-bold mb-6">Forum</h1>
            <div className="space-y-6">
                {currentPosts.map((post, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2">{post.content}</p>
                        <div className="mt-4 flex items-center">
                            <button 
                                onClick={() => handleUpvote(index)} 
                                className="px-2 py-1 mr-2 border border-gray-700 bg-gray-800 text-green-500 rounded"
                            >
                                Upvote
                            </button>
                            <button 
                                onClick={() => handleDownvote(index)} 
                                className="px-2 py-1 mr-2 border border-gray-700 bg-gray-800 text-red-500 rounded"
                            >
                                Downvote
                            </button>
                            <span>{post.votes} votes</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center">
                <nav className="inline-flex -space-x-px">
                    {[...Array(totalPages).keys()].map(number => (
                        <button
                            key={number}
                            onClick={() => handlePageChange(number + 1)}
                            className={`px-3 py-2 border border-gray-700 bg-gray-800 ${
                                currentPage === number + 1 ? 'text-indigo-500' : 'text-white'
                            }`}
                        >
                            {number + 1}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Forum;
