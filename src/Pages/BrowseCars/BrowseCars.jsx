import React from 'react';
import { useLoaderData } from 'react-router';
import CarsCard from '../../Components/CarsCard/CarsCard';

const BrowseCars = () => {
    const cars = useLoaderData()
    // console.log(cars);

    return (
        <div className='w-11/12 mx-auto my-4'>
            <h1 className='text-center font-bold text-3xl'>All Cars</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-4 gap-4 overflow-hidden'>
                {cars.map(car => <CarsCard id={car._id} car={car}></CarsCard>)}
            </div>
        </div>
    );
};

export default BrowseCars;