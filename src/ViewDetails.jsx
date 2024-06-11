import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewDetails = () => {
    const { id } = useParams();
    const [allData, setAllData] = useState([]);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/request')
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

    if (!details) {
        return <div>Loading...</div>;
    }
    return (
        <div className="min-h-screen bg-cover bg-center"  style={{ 
            backgroundImage: "url('https://i.ibb.co/KGZTTK4/black-brick-wall-textured-background.jpg')" 
        }}>



   <div className="min-h-screen flex items-center justify-center p-4 bg-transparent">
   <div className="max-w-4xl w-full bg-gray-800 text-white p-8 rounded-lg shadow-md">
       <h2 className="text-3xl mb-6 text-center font-semibold text-red-600">Trainer Details:</h2>
       <div className="flex flex-col items-center">
           <img 
               src={details.profileImage || "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"} 
               alt={`${details.fullName}'s profile`} 
               className="w-32 h-32 rounded-full mb-4 object-cover"
           />
           <div className="w-full">
               <div className="mb-4">
                   <h3 className="text-xl font-semibold text-red-600">Basic Information:</h3>
                   <p><strong>Full Name:</strong> {details.fullName}</p>
                   <p><strong>Email:</strong> {details.email}</p>
                   <p><strong>Age:</strong> {details.age}</p>
               </div>
               <div className="mb-4">
                   <h3 className="text-xl font-semibold text-red-600">Professional Information</h3>
                   <p><strong>Experience:</strong> {details.experience}</p>
                   <p><strong>Qualifications:</strong> {details.qualifications}</p>
                   <p><strong>Skills:</strong> {details.skills.join(', ')}</p>
               </div>
               <div className="mb-4">
                   <h3 className="text-xl font-semibold text-red-600">Availability</h3>
                   <p><strong>Available Days:</strong> {details.availableDays.join(', ')}</p>
                   <p><strong>Available Time:</strong> {details.availableTime}</p>
               </div>
               <div className="mb-4 ">
                   <h3 className="text-xl font-semibold text-red-600">Bio</h3>
                   <p>{details.otherInfo}</p>
               </div>
               <div className="div">
               <Link className="btn btn-primary bg-black text-white">Be A Trainer</Link>
               </div>
           </div>
       </div>
   </div>
</div>



        </div>
    );
};

export default ViewDetails;



