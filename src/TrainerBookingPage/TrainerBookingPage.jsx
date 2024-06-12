


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TrainerBookingPage = () => {
    const { id } = useParams();
    const [allData, setAllData] = useState([]);
    const [details, setDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://final-project-fit-server.vercel.app/request')
            .then(response => {
                setAllData(response.data);
            })
            .catch(error => {
                console.error('Error fetching all trainer data:', error);
            });
    }, []);

    useEffect(() => {
        if (allData.length > 0) {
            const foundDetails = allData.find(item => item._id === id);
            setDetails(foundDetails);
        }
    }, [allData, id]);

    const handleJoinNow = (pkg, price) => {
        navigate('/payment', { state: { trainerId: id, selectedPackage: pkg, price } });
    };

    if (!details) {
        return <div>Loading...</div>;
    }

    return (
        <div 
            className="min-h-screen bg-cover bg-center"
            style={{ 
                backgroundImage: "url('https://img.freepik.com/free-vector/abstract-blue-circle-black-background-technology_1142-12714.jpg')" 
            }}
        >
            <div className="min-h-screen flex items-center justify-center p-4 bg-transparent">
                <div className="max-w-4xl w-full bg-gray-800 text-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl mb-6 text-center font-semibold text-red-600">Trainer Details</h2>
                    <div className="flex flex-col items-center">
                        <img 
                            src={details.photoUrl || "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"} 
                            alt={`${details.fullName}'s profile`} 
                            className="w-32 h-32 rounded-full mb-4 object-cover"
                        />
                        <div className="w-full">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-red-600">Basic Information:</h3>
                                <p><strong>Full Name:</strong> {details.fullName}</p>
                                <p><strong>Classes:</strong> {details.classes || 'N/A'}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-red-600">Membership Packages</h3>
                                <div className="space-y-4">
                                    {['Basic', 'Standard', 'Premium'].map(pkg => (
                                        <div 
                                            key={pkg} 
                                            className="p-4 rounded-lg border border-gray-600"
                                        >
                                            <h4 className="text-lg font-semibold">{pkg} Membership</h4>
                                            <p>
                                                {pkg === 'Basic' && 'Access to gym facilities during regular operating hours. Price: $10'}
                                                {pkg === 'Standard' && 'All benefits of the basic membership. Use of cardio and strength training equipment. Access to locker rooms and showers. Price: $50'}
                                                {pkg === 'Premium' && 'All benefits of the standard membership. Access to group fitness classes such as yoga, spinning, and Zumba. Use of additional amenities like a sauna or steam room. Access to personal training sessions with certified trainers. Discounts on additional services such as massage therapy or nutrition counseling. Price: $100'}
                                            </p>
                                            <button 
                                                className="btn btn-primary bg-black text-white mt-2"
                                                onClick={() => handleJoinNow(pkg, pkg === 'Basic' ? 10 : pkg === 'Standard' ? 50 : 100)}
                                            >
                                                Pay to join
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerBookingPage;

