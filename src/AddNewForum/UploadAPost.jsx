import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const UploadAPost = () => {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newPost = { title, content, user };
        fetch('http://localhost:5000/allpost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                console.log("Added data");
                toast.success("Successfully Posted");
            } else {
                console.log('fail');
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold mb-6 text-white">Create New Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Submit</button>
                </form>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default UploadAPost;
