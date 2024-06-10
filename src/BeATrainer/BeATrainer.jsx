
import React, { useContext } from 'react';
import Select from 'react-select';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const BeATrainer = () => {
    const skillsOptions = ['Yoga', 'Cardio', 'Strength Training', 'Pilates'];
    const {user,userEmail}=useContext(AuthContext);
    console.log(user,userEmail);
    const daysOptions = [
        { value: 'Sunday', label: 'Sunday' },
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
        { value: 'Saturday', label: 'Saturday' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const skills = formData.getAll('skills');
        const availableDays = formData.getAll('availableDays');

        const submissionData = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            age: formData.get('age'),
            profileImage: formData.get('profileImage'),
            skills: skills,
            availableDays: availableDays,
            availableTime: formData.get('availableTime'),
            otherInfo: formData.get('otherInfo')
        };

        console.log('Form Data Submitted:', submissionData);
        fetch('http://localhost:5000/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submissionData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                   
                  //   setTimeout(() => {
                  //     window.location.reload();
                  // }, 2000);
                  toast.success("Applied Successfully!")
                  console.log("Added data")
                
                }
                else{console.log('fail')}
                toast.error("Failed to Apply")
    
            });
    








    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-lg w-full bg-gray-800 text-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl mb-6 text-center font-semibold">Trainer Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Full Name</label>
                        <input 
                            type="text" 
                            name="fullName" 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            defaultValue={userEmail}
                            readOnly
                         
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-500 cursor-not-allowed"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Age</label>
                        <input 
                            type="number" 
                            name="age" 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required 
                        />
                    </div>
                    <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="photoUrl">
              Photo URL
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="photoUrl"
              placeholder="Photo URL"
            />
          </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Skills</label>
                        {skillsOptions.map((skill, index) => (
                            <div key={index} className="mb-2">
                                <label className="inline-flex items-center">
                                    <input 
                                        type="checkbox" 
                                        name="skills" 
                                        value={skill} 
                                        className="form-checkbox h-5 w-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="ml-2">{skill}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Available Days</label>
                        <Select
                            isMulti
                            name="availableDays"
                            options={daysOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(selectedOptions) => {
                                document.getElementsByName('availableDays')[0].value = JSON.stringify(selectedOptions.map(option => option.value));
                            }}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    backgroundColor: '#1f2937',
                                    borderColor: '#4b5563',
                                    color: 'white',
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: 'white',
                                }),
                                menu: (provided) => ({
                                    ...provided,
                                    backgroundColor: '#1f2937',
                                }),
                                multiValue: (provided) => ({
                                    ...provided,
                                    backgroundColor: '#374151',
                                }),
                                multiValueLabel: (provided) => ({
                                    ...provided,
                                    color: 'white',
                                }),
                                multiValueRemove: (provided) => ({
                                    ...provided,
                                    color: '#9ca3af',
                                    ':hover': {
                                        backgroundColor: '#4b5563',
                                        color: 'white',
                                    },
                                }),
                            }}
                        />
                        <input type="hidden" name="availableDays" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Available Time</label>
                        <input 
                            type="text" 
                            name="availableTime" 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., 9 AM - 5 PM"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Other Information</label>
                        <textarea 
                            name="otherInfo" 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required 
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Apply
                    </button>
                </form>
                <Toaster
  position="top-right"
  reverseOrder={false}
/>
            </div>
        </div>
    );
};

export default BeATrainer;
