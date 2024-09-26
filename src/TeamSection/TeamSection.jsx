import React from 'react';
import reqCart from '../CartProvider/reqCart';

const TeamSection = () => {
    const [reqData] = reqCart();
    const trainers = reqData.filter(req => req.role === 'trainer');
    trainers.sort((a, b) => new Date(a.date) - new Date(b.date));
    const oldestTrainers = trainers.slice(0, 3);

    return (
        <div className="bg-transparent gap-3 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-white text-3xl font-bold mb-6">Our Team</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {oldestTrainers.map((trainer, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg text-white p-6">
                            <h3 className="text-xl font-semibold mb-2">{trainer.fullName}</h3>
                            <img src={trainer.photoUrl} alt={trainer.fullName} className="w-50 h-[50%] rounded-lg mb-2" />
                            <p className="text-gray-400">Role: {trainer.role}</p>
                            <p className="text-gray-400">Skills: {trainer.skills.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
