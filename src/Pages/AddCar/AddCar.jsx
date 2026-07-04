import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../../Contexts/AuthContexts';
import useAxios from '../../../hooks/useAxios';

const AddCar = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();

    const handleAddCar = (e) => {
        e.preventDefault();
        const carName = e.target.carName.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const rentPricePerDay = e.target.rentPrice.value;
        const location = e.target.location.value;
        const hostedImageURL = e.target.hostedImage.value;
        const providerName = e.target.providerName.value;
        const providerEmail = e.target.providerEmail.value;
        const dateAdded = new Date().toISOString();

        const newCar = { carName, description, category, rentPricePerDay,location,hostedImageURL,providerName,providerEmail,dateAdded }

        //add a new car to the mongoDB using the axios
        axiosInstance.post("/cars",newCar)
            .then(data =>
            {
                console.log(data.data);
            }
        )
    

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full md:w-96 max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl text-center font-bold ">Rent a car!</h1>
                        <form onSubmit={handleAddCar}>
                            <fieldset className="fieldset">

                                {/* Car Name */}
                                <label className="label">Car Name</label>
                                <input type="text" name='carName' className="input w-full" placeholder="Car Name" />

                                {/* Description */}
                                <label className="label">Description</label>
                                <input type="text" name='description' className="input w-full" placeholder="Description" />

                                {/* category */}
                                <label className='label'>Category</label>
                                <select className='bg-base-200 py-2 px-1' name='category'>
                                    <option value="SUV">SUV</option>
                                    <option value="SEDAN">SEDAN</option>
                                    <option value="HATCHBACK">HATCHBACK</option>
                                    <option value="LUXURY">LUXURY</option>
                                    <option value="ELECTRIC">ELECTRIC</option>
                                </select>


                                <div className='flex gap-2'>
                                    {/* rent price */}
                                    <div className='flex-col'>
                                        <label className="label">Rent Price</label>
                                        <input type="text" name='rentPrice' className="input " placeholder="Rent Price (per day)" />
                                    </div>

                                    {/* location */}
                                    <div className='flex-col'>
                                        <label className="label">Location</label>
                                        <input type="text" name='location' className="input" placeholder="Location" />

                                    </div>
                                </div>

                                {/* Hosted Image */}
                                <label className="label">Hosted Image</label>
                                <input type="text" name='hostedImage' className="input w-full" placeholder="Hosted Image" />

                                {/*Provider name*/}
                                <label className="label">Provider name</label>
                                <input type="text" name='providerName' className="input w-full" value={user.displayName} readOnly />

                                {/* provider email */}
                                <label className="label">Provider email</label>
                                <input type="text" name='providerEmail' className="input w-full" value={user.email} readOnly />


                                <button type='submit' className="btn h-12  mt-2 bg-[#0a4d33]  hover:bg-[#020f0a]">submit</button>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCar;