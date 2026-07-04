import React from 'react';
import { FaSquareFacebook, FaXTwitter, FaYoutube, } from 'react-icons/fa6';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary-gradient text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="https://img.icons8.com/?size=50&id=62615&format=png"
                                alt="Rent Wheels"
                            />

                            <h2 className="text-2xl font-bold">
                                Rent Wheels
                            </h2>
                        </div>

                        <p className="text-sm text-gray-200">
                            Your Ride, Anytime, Anywhere. Choose from a wide range of
                            well-maintained vehicles and enjoy a smooth rental experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2">
                            <li><a className="hover:text-blue-300">Home</a></li>
                            <li><a className="hover:text-blue-300">Available Cars</a></li>
                            <li><a className="hover:text-blue-300">Add Car</a></li>
                            <li><a className="hover:text-blue-300">My Cars</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3">
                                <FaEnvelope />
                                <span>support@rentwheels.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt />
                                <span>+880 1234-567890</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt />
                                <span>Dhaka, Bangladesh</span>
                            </div>

                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-5 text-2xl">

                            <a className="hover:text-blue-300 transition">
                                <FaSquareFacebook />
                            </a>

                            <a className="hover:text-blue-300 transition">
                                <FaXTwitter />
                            </a>

                            <a className="hover:text-blue-300 transition">
                                <FaYoutube />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-200">
                    © {new Date().getFullYear()} <span className="font-semibold">Rent Wheels</span>. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;