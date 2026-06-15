import React from 'react';
import { Link } from 'react-router';

const CarsCard = ({ car }) => {
    const { _id, carName, description, category, hostedImageURL, availability, rentPricePerDay,providerName } = car
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border">
                <figure>
                    <img
                        src={hostedImageURL}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {carName}
                        <div>{availability ? <h1 className='badge bg-green-500'>Available</h1> : <h1 className='badge bg-red-500'>Not Available</h1>}</div>

                      
                    </h2>
                    <p>{description}</p>
                    <p>Provider: { providerName}</p>
                    <div className="card-actions justify-start">

                          <div className="badge badge-primary">{category}</div>
                        <div className="badge badge-outline">${rentPricePerDay}/day</div>

                    </div>
                    <Link to={`/carDetails/${_id}`}> <button  className='btn btn-outline w-full mt-2'>View Details</button></Link>                
                </div>
            </div>
        </div>
    );
};

export default CarsCard;