import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FeaturedCars from '../../Components/FeaturedCars/FeaturedCars';

const Home = () => {
    const [cars, setCars] = useState([]);
    const carsData = useLoaderData();
    console.log(carsData);
    return (

        <div>
            <FeaturedCars carsData={carsData}></FeaturedCars>
        </div>


    );
};

export default Home;