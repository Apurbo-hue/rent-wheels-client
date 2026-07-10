import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CarsCard from '../../Components/CarsCard/CarsCard';

const BrowseCars = () => {
    const carsData = useLoaderData()
    // console.log(cars);
    const [search, setSearch] = useState("");
    console.log(search);

    const filteredCars = carsData.filter((cars) => cars.carName.toLowerCase().includes(search))
    console.log(filteredCars)


    return (
        <div className='w-11/12 mx-auto my-4'>
            <div className='px-20 flex justify-between'>
                <h1 className='text-center font-bold text-3xl'>All Cars({ filteredCars.length})</h1>


                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} required placeholder="Search" />
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-4 gap-4 overflow-hidden'>
                {filteredCars.length > 0 ? filteredCars.map(car => <CarsCard id={car._id} car={car}></CarsCard>) : <h1>Car not found</h1>}
            </div>
        </div>
    );
};

export default BrowseCars;