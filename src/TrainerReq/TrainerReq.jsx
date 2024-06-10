import React from 'react';
import reqCart from '../CartProvider/reqCart';

const TrainerReq = () => {
    const [reqData]=reqCart();
    console.log(reqData);




    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
        <div className="max-w-4xl w-full bg-gray-800 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl mb-6 text-center font-semibold">Trainer Applications</h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Full Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Age</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reqData.map((req, index) => (
                            <tr key={index} className="border-t border-gray-700">
                                <td className="px-4 py-2">{req.fullName}</td>
                                <td className="px-4 py-2">{req.email}</td>
                                <td className="px-4 py-2">{req.age}</td>
                                <td className="px-4 py-2 space-x-2">
                                    <button 
                                        onClick={() => handleDetailsClick(req._id)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                    >
                                        Details
                                    </button>
                                    <button 
                                        onClick={() => handleApprove(req._id)}
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                                    >
                                        Approve
                                    </button>
                                    <button 
                                        onClick={() => handleReject(req._id)}
                                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default TrainerReq;