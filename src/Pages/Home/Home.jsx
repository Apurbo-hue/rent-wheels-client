import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CarsCard from '../../Components/CarsCard/CarsCard';

const Home = () => {
    const [cars, setCars] = useState([]);
    const carsData = useLoaderData();
    console.log(carsData);
    return (

         <div className='my-6 w-full mx-auto'>
            <h1 className='font-bold text-center my-6'>Featured Cars🔥</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4 overflow-hidden'>

            {carsData.map((car) => <CarsCard car={car}></CarsCard>)}
            </div>
        </div>
    );
};

export default Home;