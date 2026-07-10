import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../../Contexts/AuthContexts';

const Navbar = () => {
    const { signOutUser } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    // console.log(user.displayName);
    // console.log(user.photoURL);

    const handleSignOut = () => {

        signOutUser()
            .then(() => {
                console.log("User signed out !");
                // setUser(null);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addCar">Add Car</NavLink></li>
        <li><NavLink to="/myListings">My Listings</NavLink></li>
        <li><NavLink to="/myBookings">My Bookings</NavLink></li>
        <li><NavLink to="/browseCars">Browse Cars</NavLink></li>
        {!user && <li><NavLink to="/login">Login</NavLink></li>}
       
    </>
    return (
        <div className="max-lg:collapse bg-primary-gradient shadow-sm w-full  rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <a href='/'><button className="btn btn-ghost text-xl">Rent Wheels</button></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                {/* navbar end */}
                <div className="navbar-end">
                    {user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="Profile" />
                                </div>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                            >
                                <li><span>Name: {user?.displayName}</span></li>
                                <li><span>Email: {user?.email}</span></li>
                                <li>
                                    <button onClick={handleSignOut}>Sign Out</button>
                                </li>
                            </ul>
                        </div>
                        :
                        <button className='btn' ><NavLink to="/login">Sign In</NavLink></button>}

                </div>
            </div>

            {/* menu for the mobile version */}
            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

