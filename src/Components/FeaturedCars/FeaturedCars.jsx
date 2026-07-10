import React, { useState } from 'react';
import CarsCard from '../CarsCard/CarsCard';

const FeaturedCars = ({ carsData }) => {
    const [search, setSearch] = useState("");
    console.log(search);

    const filteredCars = carsData.filter((cars) => cars.carName.toLowerCase().includes(search))
    console.log(filteredCars)
    return (
        <div>
            <div className='my-6 w-full mx-auto'>
                <h1 className='font-bold text-3xl text-center my-6'>Featured Cars🔥</h1>
                <div className='flex justify-between px-20 pb-4'>
                    <h1 className='font-bold'>Cars({filteredCars.length})</h1>
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
                        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} required placeholder="Search cars by name, brand or model" />
                    </label>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4 overflow-hidden'>
                    {filteredCars.map((car) => <CarsCard car={car}></CarsCard>)}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCars;