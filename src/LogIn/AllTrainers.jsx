import React from 'react';
import reqCart from '../CartProvider/reqCart';
import { Link } from 'react-router-dom';

const AllTrainers = () => {
    const [reqData] = reqCart();

   
    const trainers = reqData.filter(req => req.role === 'trainer');

    return (
        <div>
            {trainers.map((trainer, index) => (
              <div className="card card-side bg-gray-900 shadow-xl text-white md:w-[80%] m-auto gap-2 ">
              <figure><img src={trainer.photoURL || "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"} alt="Trainer Profile"  className="w-32 h-32 rounded-full mb-4 object-cover"/></figure>
              <div className="card-body">
                <h2 className="card-title">Trainer Name: {trainer.fullName}</h2>
                <p>Age: {trainer.age} </p>
                <p>Skills: {trainer.skills}</p>
                
                
                <p>Available Slots: {trainer.availableDays}</p>
               
                <div className="card-actions justify-end">
                <Link to={`/ViewDetails/${trainer._id}`}>
                <button className="btn btn-primary bg-[#333333]">Know More</button>
                                 </Link>
                  
                </div>
              </div>
            </div>
            ))}
        </div>
    );
};

export default AllTrainers;
