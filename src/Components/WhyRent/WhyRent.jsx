import React from 'react';
import {
    FaBolt,
    FaMoneyBillWave,
    FaUserShield,
    FaHeadset,
} from "react-icons/fa";

const WhyRent = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center mb-4 font-bold text-2xl'>Why rent with us?</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">

                {/* Easy Booking */}
                <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <FaBolt className="text-3xl mb-3 text-primary" />
                    <h3 className="text-xl font-bold mb-2">
                        Easy Booking
                    </h3>
                    <p className="text-sm text-gray-500">
                        Book your preferred car in just a few clicks with our fast and secure reservation process.
                    </p>
                </div>

                {/* Affordable Rates */}
                <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <FaMoneyBillWave className="text-3xl mb-3 text-success" />
                    <h3 className="text-xl font-bold mb-2">
                        Affordable Rates
                    </h3>
                    <p className="text-sm text-gray-500">
                        Enjoy competitive daily rental prices with transparent pricing and no hidden charges.
                    </p>
                </div>

                {/* Trusted Providers */}
                <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <FaUserShield className="text-3xl mb-3 text-info" />
                    <h3 className="text-xl font-bold mb-2">
                        Trusted Providers
                    </h3>
                    <p className="text-sm text-gray-500">
                        Every vehicle is listed by verified providers to ensure safety, reliability, and quality service.
                    </p>
                </div>

                {/* 24/7 Support */}
                <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <FaHeadset className="text-3xl mb-3 text-warning" />
                    <h3 className="text-xl font-bold mb-2">
                        24/7 Support
                    </h3>
                    <p className="text-sm text-gray-500">
                        Our support team is available around the clock to assist you before, during, and after your rental.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default WhyRent;