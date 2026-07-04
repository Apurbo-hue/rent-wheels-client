import React from 'react';
import { FaCar, FaEnvelope, FaMapMarkedAlt, FaUser } from 'react-icons/fa';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const CarDetails = () => {
    const car = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);
    console.log(car);
    const { _id, carName, description, hostedImageURL, category, location, providerEmail, providerName, rentPricePerDay, availability, dateAdded, bookingCount
    } = car;

    return (

        <div className="max-w-6xl mx-auto p-6">

            {/* Card */}
            <div className="card bg-base-100 shadow-xl">

                {/* Image */}
                <figure>
                    <img
                        src={hostedImageURL}
                        alt={carName}
                        className="w-full h-112.5 object-cover"
                    />
                </figure>

                <div className="card-body">

                    {/* Title */}
                    <div className="flex justify-between items-center flex-wrap gap-3">

                        <h1 className="text-4xl font-bold">
                            {carName}
                        </h1>

                        <span
                            className={`badge badge-lg ${availability
                                    ? "badge-success"
                                    : "badge-error"
                                }`}
                        >
                            {car.availability ? "Available" : "Not Available"}
                        </span>

                    </div>

                    {/* Category */}
                    <div>
                        <span className="badge badge-outline badge-primary">
                            {category}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">
                            Description
                        </h2>

                        <p className="text-gray-500">
                            {description}
                        </p>
                    </div>

                    {/* Information */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

                        <div className="bg-base-200 rounded-xl p-4">
                            <FaCar className="text-2xl mb-2 text-primary" />
                            <p className="text-sm">Rent Per Day</p>
                            <h3 className="text-2xl font-bold">
                                ${rentPricePerDay}
                            </h3>
                        </div>

                        <div className="bg-base-200 rounded-xl p-4">
                            <FaMapMarkedAlt className="text-2xl mb-2 text-error" />
                            <p className="text-sm">Location</p>
                            <h3 className="font-semibold">
                                {location}
                            </h3>
                        </div>

                        <div className="bg-base-200 rounded-xl p-4">
                            <FaCar className="text-2xl mb-2 text-success" />
                            <p className="text-sm">Bookings</p>
                            <h3 className="text-2xl font-bold">
                                {bookingCount}
                            </h3>
                        </div>

                        <div className="bg-base-200 rounded-xl p-4">
                            <p className="text-sm">Added On</p>

                            <h3 className="font-semibold">
                                {new Date(dateAdded).toLocaleDateString()}
                            </h3>
                        </div>

                    </div>

                    {/* Provider */}

                    <div className="divider"></div>

                    <div>

                        <h2 className="text-2xl font-semibold mb-4">
                            Provider Information
                        </h2>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3">
                                <FaUser />
                                <span>{providerName}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope />
                                <span>{providerEmail}</span>
                            </div>

                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="card-actions justify-end mt-8">

                        <button
                            className="btn btn-outline"
                            onClick={()=>navigate(-1)}
                        >
                            Back
                        </button>

                        <button
                            className="btn btn-primary"
                            disabled={!availability}
                        >
                            Book Now
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CarDetails;