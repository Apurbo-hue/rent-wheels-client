import React from 'react';
import { FaCar, FaDollarSign, FaMapMarkedAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router';

const CarsCard = ({ car }) => {
    const { _id, carName, description, category, hostedImageURL, availability, rentPricePerDay, providerName, location } = car
    return (

        <div className="max-w-sm my-2">
            <div className="card bg-base-100 w-86 sm:w-96 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                {/* Image */}
                <figure className="overflow-hidden w-full">
                    <img
                        src={hostedImageURL}
                        alt={carName}
                        className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </figure>

                <div className="card-body">

                    {/* Title + Availability */}
                    <div className="flex justify-between items-start">
                        <h2 className="card-title text-xl font-bold">
                            {carName}
                        </h2>

                        <span
                            className={`badge text-white ${availability
                                    ? "badge-success"
                                    : "badge bg-red-600"
                                }`}
                        >
                            {availability ? "Available" : "Booked"}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 line-clamp-2">
                        {description}
                    </p>

                    {/* Provider */}
                    <div className="flex items-center gap-2 mt-2 text-sm">
                        <FaUser className="text-warning" />
                        <span>{providerName}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm">
                        <FaMapMarkedAlt className="text-error" />
                        <span>{location}</span>
                    </div>

                    {/* Bottom */}
                    <div className="flex justify-between items-center mt-5">

                        <div>
                            <span className="badge badge-warning badge-outline">
                                <FaCar className="mr-1" />
                                {category}
                            </span>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-400">
                                Per Day
                            </p>

                            <h2 className="text-2xl font-bold text-warning flex items-center justify-end">
                                <FaDollarSign className="text-lg" />
                                {rentPricePerDay}
                            </h2>
                        </div>

                    </div>

                    <div className="mt-5">
                        <Link to={`/carDetails/${_id}`}>
                            <button className="btn btn-warning w-full text-black">
                                View Details →
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CarsCard;