import React from 'react';
import classCart from '../CartProvider/classCart';

const FeateredClass = () => {
    const [classData] = classCart();

  
    const latestClasses = classData.slice(0, 3);

    return (
        <div className="bg-transparent p-6">
            <h2 className="text-white text-3xl font-bold mb-4">Featured Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {latestClasses.map((classItem, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
                        <h3 className="text-xl font-semibold mb-2">{classItem.classname}</h3>
                        <div className="image-container mb-2">
                            <img
                                src={classItem.image}
                                alt={classItem.classname}
                                className="w-full h-auto object-cover rounded-lg"
                                style={{ height: '200px' }} 
                            />
                        </div>
                        <p>{classItem.details}</p>
                        <p>{classItem.additionalInfo}</p>
                        <div className="flex justify-between mt-4">
                            <span className="text-gray-400">Slot: {classItem.slot}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeateredClass;

