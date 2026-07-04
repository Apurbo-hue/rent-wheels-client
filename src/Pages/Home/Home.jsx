import React from 'react';
import { useLoaderData } from 'react-router';
import FeaturedCars from '../../Components/FeaturedCars/FeaturedCars';
import HeroBanner from '../../Components/HeroBanner/HeroBanner';
import WhyRent from '../../Components/WhyRent/WhyRent';

const Home = () => {
   
    const carsData = useLoaderData();
    // console.log(carsData);
    return (

        <div>
            <HeroBanner></HeroBanner>
            <FeaturedCars key={carsData._id} carsData={carsData}></FeaturedCars>
            <WhyRent></WhyRent>
        </div>


    );
};

export default Home;