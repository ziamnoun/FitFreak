// import React from 'react';
// import classCart from '../CartProvider/classCart';

// const AllClasses = () => {
//     const [classData] = classCart()
//     console.log(classData)
//     return (
//         <div className="card w-96 bg-base-100 shadow-xl">
//         <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             Shoes!
//             <div className="badge badge-secondary">NEW</div>
//           </h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//           <div className="card-actions justify-end">
//             <div className="badge badge-outline">Fashion</div> 
//             <div className="badge badge-outline">Products</div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default AllClasses;
import React from 'react';
import classCart from '../CartProvider/classCart';

const AllClasses = () => {
    const [classData] = classCart();
    console.log(classData);

    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[80%] m-auto">
            {classData.map((classItem, index) => (
                <div key={index} className="card bg-black text-white shadow-xl">
                    <figure style={{ height: "200px", overflow: "hidden" }}>
                        <img src={classItem.image} alt={classItem.classname} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {classItem.classname}
                            <div className="badge badge-secondary">NEW</div> {/* You can conditionally render this badge based on classItem */}
                        </h2>
                        <p>{classItem.details}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Class Time:{classItem.slot}</div> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllClasses;


