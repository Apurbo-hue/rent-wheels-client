import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContexts';
import MyListingsTable from './MyListingsTable';
import useAxios from '../../../hooks/useAxios';

const MyListings = () => {
    const [cars, setCars] = useState([]);
    const axiosInstance = useAxios();
    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    useEffect(() => {
        axiosInstance(`/cars?email=${user?.email}`)
            .then(data => setCars(data.data));

    }, [axiosInstance, user?.email])
    return (
        <div className='w-11/12 mx-auto my-6'>
            <h1 className='text-center my-4'>Cars listed by <span className='font-bold'> {user?.displayName}</span></h1>
            <MyListingsTable cars={cars} setCars={setCars} keepUpdate ={true} link="cars"></MyListingsTable>
        </div>
    );
};

export default MyListings;