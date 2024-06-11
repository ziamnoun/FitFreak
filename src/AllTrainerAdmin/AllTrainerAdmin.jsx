import React from 'react';
import reqCart from '../CartProvider/reqCart';
import Swal from 'sweetalert2';

const AllTrainerAdmin = () => {
    const [reqData] = reqCart();
    const trainers = reqData.filter(req => req.role === 'trainer');

    
    const handleDelete =  (id) => {
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
        <div className="min-h-screen bg-cover bg-center p-4" style={{ backgroundImage: "url('https://i.ibb.co/KGZTTK4/black-brick-wall-textured-background.jpg')" }}>
            <div className="container mx-auto">
                <h2 className="text-4xl text-center text-white mb-8">All Trainers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.map(trainer => (
                        <div key={trainer._id} className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img 
                                    src={trainer.photoUrl || "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"} 
                                    alt={`${trainer.fullName}'s profile`} 
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{trainer.fullName}</h3>
                                    <p>{trainer.email}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p><strong>Age:</strong> {trainer.age}</p>
                                <p><strong>Skills:</strong> {trainer.skills.join(', ')}</p>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <button className="btn btn-danger bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => handleDelete(trainer._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllTrainerAdmin;
