import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CarDetails = () => {
    const car = useLoaderData();
    const { id } = useParams();
    console.log(id);
    console.log(car);
    const { _id, carName, description, hostedImageURL, category, location, providerEmail, providerName,rentPricePerDay } = car;

    return (
        <div className='max-w-7xl mx-auto flex gap-70 my-4'>

            {/* car details left side */}
            <div>
                <figure>
                    <img className='w-120' src={hostedImageURL} alt="" />
                </figure>
                <p>{description}</p>
              
            </div>
            {/* car details right side */}
            <div>
                 <h1>Car: {carName}</h1>
                
                <h1>{category}</h1>
                <h1>{providerEmail}</h1>
                <h1>{providerName}</h1>
                <h1>{location}</h1>
                <h1>Rent: ${rentPricePerDay}/day</h1>
            </div>

        </div>
    );
};

export default CarDetails;