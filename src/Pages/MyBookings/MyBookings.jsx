import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContexts';
import MyListingsTable from './../MyListings/MyListingsTable';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/bookings?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
                console.log(data);
            }
            );
    }, [user?.email])
    return (
        <div className='w-11/12 mx-auto my-6'>
            <h1 className='text-center my-4'>This are the cars booked by <span className='font-bold'>{user?.displayName}</span></h1>
             <MyListingsTable cars={cars} setCars={setCars} link="bookings"></MyListingsTable>
        </div>
    );
};

export default MyBookings;