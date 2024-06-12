


import React, { useContext, useState } from 'react';
import reqCart from '../CartProvider/reqCart';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UsePayCart from '../CartProvider/usePayCart';
import StarRating from './StarRating';


const BookedTrainer = () => {
    const { user, userEmail } = useContext(AuthContext);
    const [userPayData] = UsePayCart();
    const [reqData] = reqCart();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTrainer, setCurrentTrainer] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);

    const filteredPayments = userPayData.filter(payment => payment.email === userEmail);

    const openModal = (trainer) => {
        setCurrentTrainer(trainer);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCurrentTrainer(null);
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        
        console.log({ trainer: currentTrainer, feedback, rating });
       
        setFeedback('');
        setRating(0);
        closeModal();
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-white">
            <h1 className="text-3xl font-bold mb-6">Booked Trainers</h1>
            {filteredPayments.length > 0 ? (
                filteredPayments.map(payment => {
                    const trainer = reqData.find(trainer => trainer._id === payment.trainerId);

                    return (
                        <div key={payment._id} className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
                            <h2 className="text-xl font-semibold">Package: {payment.selectedPackage}</h2>
                            <p className="mt-2">Price: ${payment.price}</p>
                            <p className="mt-2">Date: {new Date(payment.date).toLocaleDateString()}</p>
                            <p className="mt-2">Transaction ID: {payment.transactionId}</p>
                            <p className="mt-2">Status: {payment.status}</p>
                            {trainer && (
                                <>
                                    <h3 className="text-lg font-semibold mt-4">Trainer Information</h3>
                                    <p className="mt-2">Trainer Name: {trainer.name}</p>
                                    <p className="mt-2">Trainer Email: {trainer.email}</p>
                                    <p className="mt-2">Trainer Specialty: {trainer.specialty}</p>
                                    <button
                                        onClick={() => openModal(trainer)}
                                        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg"
                                    >
                                        Review
                                    </button>
                                </>
                            )}
                        </div>
                    );
                })
            ) : (
                <p className="text-center">No booked trainers found.</p>
            )}
            
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Review {currentTrainer.name}</h2>
                        <textarea
                            className="w-full p-2 mb-4 bg-gray-700 text-white rounded-lg"
                            rows="4"
                            placeholder="Write your feedback here..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                        <StarRating rating={rating} setRating={setRating} />
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-green-500 text-white rounded-lg mr-2"
                            >
                                Submit
                            </button>
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookedTrainer;


