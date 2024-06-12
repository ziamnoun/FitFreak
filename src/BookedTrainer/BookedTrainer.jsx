
import React, { useContext } from 'react';
import reqCart from '../CartProvider/reqCart';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UsePayCart from '../CartProvider/usePayCart';

const BookedTrainer = () => {
    const { user, userEmail } = useContext(AuthContext);
    const [userPayData] = UsePayCart();
    const [reqData] = reqCart();

    const filteredPayments = userPayData.filter(payment => payment.email === userEmail);

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
                                    <p className="mt-2">Trainer Name: {trainer.fullName}</p>
                                    <p className="mt-2">Trainer Email: {trainer.email}</p>
                                    <p className="mt-2">Trainer Specialty: {trainer.skills}</p>
                                </>
                            )}
                        </div>
                    );
                })
            ) : (
                <p className="text-center">No booked trainers found.</p>
            )}
        </div>
    );
};

export default BookedTrainer;
