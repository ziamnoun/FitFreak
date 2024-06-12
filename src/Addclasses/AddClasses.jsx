// import React from 'react';
// import toast from 'react-hot-toast';

// const AddClasses = ({ onAddClass }) => {
//     let classnameInput, imageInput, detailsInput, additionalInfoInput;

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
     
//         const classname = classnameInput.value;
//         const image = imageInput.value;
//         const details = detailsInput.value;
//         const additionalInfo = additionalInfoInput.value;

       
//         onAddClass({ classname, image, details, additionalInfo });

      
//         classnameInput.value = '';
//         imageInput.value = '';
//         detailsInput.value = '';
//         additionalInfoInput.value = '';

//         const allClassInfo={classname,image,details,additionalInfo};
//         fetch('http://localhost:5000/allclass', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(allClassInfo)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.insertedId) {
                   
                  
//                   console.log("Added data")
//                   toast.success("Class Added")
                
//                 }
//                 else{console.log('fail')
//                     toast.error("Failed to add classes")
//                 }
    
//             });






//     };

//     return (
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
//             <div className="mb-4">
//                 <label htmlFor="classname" className="block text-white font-semibold mb-2">Class Name:</label>
//                 <input
//                     type="text"
//                     id="classname"
//                     ref={(input) => (classnameInput = input)}
//                     className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="image" className="block text-white font-semibold mb-2">Image:</label>
//                 <input
//                     type="text"
//                     id="image"
//                     ref={(input) => (imageInput = input)}
//                     className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="details" className="block text-white font-semibold mb-2">Details:</label>
//                 <textarea
//                     id="details"
//                     ref={(input) => (detailsInput = input)}
//                     className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
//                     required
//                 ></textarea>
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="additionalInfo" className="block text-white font-semibold mb-2">Additional Info:</label>
//                 <textarea
//                     id="additionalInfo"
//                     ref={(input) => (additionalInfoInput = input)}
//                     className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
//                 ></textarea>
//             </div>
//             <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
//                 Add Class
//             </button>
//         </form>
//     );
// };

// export default AddClasses;


import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddClasses = ({ onAddClass }) => {
    let classnameInput, imageInput, detailsInput, additionalInfoInput, slotInput;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const classname = classnameInput.value;
        const image = imageInput.value;
        const details = detailsInput.value;
        const additionalInfo = additionalInfoInput.value;
        const slot = slotInput.value;

        // onAddClass({ classname, image, details, additionalInfo, slot });

        classnameInput.value = '';
        imageInput.value = '';
        detailsInput.value = '';
        additionalInfoInput.value = '';
        slotInput.value = 'morning'; 

        const allClassInfo = { classname, image, details, additionalInfo, slot };
        fetch('http://localhost:5000/allclass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allClassInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                console.log("Added data");
                toast.success("Class Added");
            } else {
                console.log('fail');
                toast.error("Failed to add classes");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
            <div className="mb-4">
                <label htmlFor="classname" className="block text-white font-semibold mb-2">Class Name:</label>
                <input
                    type="text"
                    id="classname"
                    ref={(input) => (classnameInput = input)}
                    className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="image" className="block text-white font-semibold mb-2">Image:</label>
                <input
                    type="text"
                    id="image"
                    ref={(input) => (imageInput = input)}
                    className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="details" className="block text-white font-semibold mb-2">Details:</label>
                <textarea
                    id="details"
                    ref={(input) => (detailsInput = input)}
                    className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
                    required
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="additionalInfo" className="block text-white font-semibold mb-2">Additional Info:</label>
                <textarea
                    id="additionalInfo"
                    ref={(input) => (additionalInfoInput = input)}
                    className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="slot" className="block  text-white font-semibold mb-2">Slot:</label>
                <select
                    id="slot"
                    ref={(input) => (slotInput = input)}
                    className="w-full px-3 py-2 bg-black border border-gray-400 rounded text-white focus:outline-none focus:border-teal-500"
                >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>
            </div>
            <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add Class
            </button>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </form>
    );
};

export default AddClasses;


