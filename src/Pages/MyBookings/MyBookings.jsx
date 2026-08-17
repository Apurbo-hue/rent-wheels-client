import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContexts';
import MyListingsTable from './../MyListings/MyListingsTable';
import useAxios from '../../../hooks/useAxios';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();
    const [cars, setCars] = useState([]);
    useEffect(() => {
        axiosInstance.get(`/bookings?userEmail=${user?.email}`)
            // .then(res => res.json())
            .then(data => {
                setCars(data.data);
                console.log(data.data);
            }
            );
    }, [axiosInstance, user?.email])
    return (
        <div className='w-11/12 mx-auto my-6'>
            <h1 className='text-center my-4'>This are the cars booked by <span className='text-warningn font-bold'>{user?.displayName}</span></h1>
             <MyListingsTable cars={cars} setCars={setCars} link="bookings" keepUpdate={false}></MyListingsTable>
        </div>
    );
};

export default MyBookings;