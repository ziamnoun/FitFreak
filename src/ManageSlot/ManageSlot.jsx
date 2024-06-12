import React, { useContext, useState, useEffect } from 'react';
import reqCart from '../CartProvider/reqCart';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';

const ManageSlot = () => {
  const [loading, setLoading] = useState(true);
  const [trainerData, setTrainerData] = useState(null);
  const [error, setError] = useState(null);
  const { user, userEmail } = useContext(AuthContext);
  const [reqData] = reqCart();

  useEffect(() => {
    if (!user || !userEmail || !reqData) {
      setLoading(true);
      return;
    }

    const lowerCaseUserEmail = userEmail.toLowerCase();
    const matchedTrainer = reqData.find(data => data.email.toLowerCase() === lowerCaseUserEmail);

    if (matchedTrainer) {
      setTrainerData(matchedTrainer);
      setLoading(false);
    } else {
      setError("Trainer data not found");
      setLoading(false);
    }
  }, [user, userEmail, reqData]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-white">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-white">Error: {error}</div>;
  }

  return (
    <div className="bg-transparent min-h-screen text-white flex justify-center items-center">
      <div className="max-w-md p-8 rounded-lg shadow-lg">
        <img src={trainerData.photoUrl} alt="Trainer" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-center mb-2">{trainerData.fullName}</h1>
        <p className="text-center mb-2">Email: {trainerData.email}</p>
        <p className="text-center mb-2">Skills: {trainerData.skills.join(', ')}</p>
        <p className="text-center mb-2">Available Days: {trainerData.availableDays.join(', ')}</p>
        <p className="text-center mb-2">Available Time: {trainerData.availableTime.join(', ')}</p>
        <p className="text-center mb-2">Other Info: {trainerData.otherInfo}</p>
      </div>
    
    </div>
  );
};

export default ManageSlot;

