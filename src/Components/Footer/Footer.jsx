import React from 'react';
import { FaFacebook, FaSquareFacebook, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-primary-gradient text-primary-content p-10">
            <aside>
                <img src="https://img.icons8.com/?size=50&id=62615&format=png" alt="Failed to Load" />
                <p className="font-bold">
                    Rent Wheels
                    <br />
                    Your Ride, Anytime, Anywhere.
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaXTwitter size={24}></FaXTwitter>
                    </a>
                    <a>
                        <FaYoutube size={24}></FaYoutube>
                    </a>
                    <a>
                        <FaSquareFacebook size={24}></FaSquareFacebook>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;