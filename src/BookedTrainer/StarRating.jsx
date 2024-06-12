import React from 'react';

const StarRating = ({ rating, setRating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            className="hidden"
                            onClick={() => setRating(ratingValue)}
                        />
                        <svg
                            className={`w-8 h-8 cursor-pointer ${
                                ratingValue <= rating ? 'text-yellow-500' : 'text-gray-400'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.38 4.247a1 1 0 00.95.69h4.462c.969 0 1.371 1.24.588 1.81l-3.614 2.624a1 1 0 00-.364 1.118l1.381 4.248c.3.921-.755 1.688-1.54 1.118l-3.614-2.624a1 1 0 00-1.175 0l-3.614 2.624c-.784.57-1.84-.197-1.54-1.118l1.381-4.248a1 1 0 00-.364-1.118L2.07 9.674c-.783-.57-.38-1.81.588-1.81h4.462a1 1 0 00.95-.69l1.38-4.247z" />
                        </svg>
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
