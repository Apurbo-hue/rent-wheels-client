import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContexts';
import MyListingsTable from './MyListingsTable';

const MyListings = () => {
    const [cars, setCars] = useState([]);
    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    useEffect(() => {
        fetch(`http://localhost:3000/cars?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCars(data));


    }, [user?.email])
    return (
        <div className='w-11/12 mx-auto'>
            <MyListingsTable cars={cars} setCars={setCars}></MyListingsTable>
        </div>
    );
};

export default MyListings;