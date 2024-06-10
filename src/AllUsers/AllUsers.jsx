// import React from 'react';
// import UseCart from '../CartProvider/UseCart';

// const AllUsers = () => {

//     const [userData]=UseCart();
//     console.log(userData);



//     return (
//         <div className='min-h-screen bg-transparent text-white text-3xl'>
//             Users
            
//         </div>
//     );
// };

// export default AllUsers;

import React from 'react';
import UseCart from '../CartProvider/UseCart';

const AllUsers = () => {
    const [userData] = UseCart();
    console.log(userData);

    return (
        <div className='min-h-screen bg-transparent text-white p-4'>
            <h1 className='text-3xl mb-4'>Totall Users:{userData.length}</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Photo</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData && userData.map((user, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">
                                    <img src={user.photoUrl} alt="User Photo" className="w-10 h-10 rounded-full" />
                                </td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
