
import React, { useState } from 'react';
import Select from 'react-select';

const BeATrainer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: 'user@example.com',  
        age: '',
        profileImage: null,
        skills: [],
        availableDays: [],
        availableTime: '',
        otherInfo: ''
    });

    const skillsOptions = ['Yoga', 'Cardio', 'Strength Training', 'Pilates'];
    const daysOptions = [
        { value: 'Sun', label: 'Sunday' },
        { value: 'Mon', label: 'Monday' },
        { value: 'Tue', label: 'Tuesday' },
        { value: 'Wed', label: 'Wednesday' },
        { value: 'Thu', label: 'Thursday' },
        { value: 'Fri', label: 'Friday' },
        { value: 'Sat', label: 'Saturday' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'skills') {
            setFormData({
                ...formData,
                skills: checked 
                    ? [...formData.skills, value] 
                    : formData.skills.filter(skill => skill !== value)
            });
        }
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profileImage: e.target.files[0]
        });
    };

    const handleDaysChange = (selectedOptions) => {
        setFormData({
            ...formData,
            availableDays: selectedOptions.map(option => option.value)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        
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
                            value={formData.fullName} 
                            onChange={handleChange} 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            readOnly
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-500 cursor-not-allowed"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Age</label>
                        <input 
                            type="number" 
                            name="age" 
                            value={formData.age} 
                            onChange={handleChange} 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Profile Image</label>
                        <input 
                            type="file" 
                            name="profileImage" 
                            onChange={handleFileChange} 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        checked={formData.skills.includes(skill)}
                                        onChange={handleCheckboxChange}
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
                            onChange={handleDaysChange}
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
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Available Time</label>
                        <input 
                            type="text" 
                            name="availableTime" 
                            value={formData.availableTime} 
                            onChange={handleChange} 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., 9 AM - 5 PM"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-400">Other Information</label>
                        <textarea 
                            name="otherInfo" 
                            value={formData.otherInfo} 
                            onChange={handleChange} 
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
            </div>
        </div>
    );
};

export default BeATrainer;
