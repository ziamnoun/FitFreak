import React from 'react';
import subsCart from '../CartProvider/subsCart';

const Subscriber = () => {
    const [subsData]=subsCart();
    console.log(subsData)




    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
        <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-6">
                Total Subscribers: {subsData.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto bg-gray-800 rounded-lg">
                    <thead>
                        <tr className="bg-gray-900 text-white">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subsData.map((subscriber, index) => (
                            <tr key={index} className="bg-gray-800 border-t border-gray-700">
                                <td className="px-4 py-2">{subscriber.name}</td>
                                <td className="px-4 py-2">{subscriber.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default Subscriber;