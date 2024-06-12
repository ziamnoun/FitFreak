import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import reqCart from '../CartProvider/reqCart';
import axios from 'axios';
import Select from 'react-select'; 
import toast, { Toaster } from 'react-hot-toast';

const AddNewSlot = () => {
  const { user, userEmail } = useContext(AuthContext);
  const [reqData, setReqData] = reqCart();

 
  const [slotName, setSlotName] = useState('');
  const [slotTime, setSlotTime] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null); 
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [otherInfo, setOtherInfo] = useState('');

  
  const slotOptions = [
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/request');
        setReqData(response.data);
      } catch (error) {
        console.error('Error fetching request data:', error);
      }
    };
    fetchData();
  }, []); 

 
  const handleUpdate = async (e) => {
    e.preventDefault();

  
    const existingSlot = reqData.find(data => data.email === userEmail);

    if (!existingSlot) {
      console.error('Existing slot not found');
      return;
    }

    
    const updatedSlot = {
      slotName: selectedSlot ? selectedSlot.value : '', 
      slotTime,
      selectedClasses,
      otherInfo
    };

    try {
      
      const response = await axios.put(`http://localhost:5000/request/${existingSlot._id}`, updatedSlot);
      console.log(response.data); 
      
      toast.success('Updated!')
    } catch (error) {
      console.error('Error updating slot:', error); 
    
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-center">
      <div className="max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Add New Slot</h1>
        <form onSubmit={handleUpdate}>
          <label className="block mb-2">
            Slot:
            <Select
              options={slotOptions}
              value={selectedSlot}
              onChange={setSelectedSlot}
              className="mt-1"
            />
          </label>
          <label className="block mb-2">
            Slot Time:
            <input type="text" value={slotTime} onChange={(e) => setSlotTime(e.target.value)} className="block w-full mt-1 p-2 rounded-md bg-gray-800 text-white" />
          </label>
          
          <label className="block mb-2">
            Other Info:
            <textarea value={otherInfo} onChange={(e) => setOtherInfo(e.target.value)} className="block w-full mt-1 p-2 rounded-md bg-gray-800 text-white" />
          </label>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Slot</button>
        </form>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default AddNewSlot;


