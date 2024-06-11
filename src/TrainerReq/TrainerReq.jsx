import React from 'react';
import axios from 'axios';
import reqCart from '../CartProvider/reqCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const TrainerReq = () => {
    const [reqData]=reqCart();
    console.log(reqData);


    const handleReject =  (id) => {
        console.log(id)
       
             Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/request/${id}`, {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data); 
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Rejected Successfully",
                                icon: "success"
                            })
                            .then(() => {
                                
                                window.location.reload();
                            });
                        } else {
                            throw new Error('No wish list item deleted');
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting wish list item:', error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete wished Blog.",
                            icon: "error"
                        });
                    });
                }
            });
        
    };

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
                                 <Link to={`/ViewDetails/${req._id}`}>
                                 <button 
                                        onClick={() => handleDetailsClick(req._id)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                    >
                                        Details
                                    </button>
                                 </Link>
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