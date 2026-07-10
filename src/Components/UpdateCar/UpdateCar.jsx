import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
import { AuthContext } from '../../../Contexts/AuthContexts';

const UpdateCar = () => {
    const { user } = useContext(AuthContext);
    const car = useLoaderData();
    // console.log("car details",car);
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    const handleUpdateCar = (e) => {
        const parseBoolean = (value) => {
            if (value === "true") {
                return true
            }
            return false
        }
        e.preventDefault();
        const carName = e.target.carName.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const rentPricePerDay = e.target.rentPrice.value;
        const location = e.target.location.value;
        const hostedImageURL = e.target.hostedImage.value;
        const providerName = e.target.providerName.value;
        const providerEmail = e.target.providerEmail.value;
        const availableValue = parseBoolean(e.target.availability.value);
        const availability = availableValue;

        console.log(typeof (availability))
        const dateAdded = new Date().toISOString();
        const form = e.target

        const newCar = { carName, description, category, rentPricePerDay, location, hostedImageURL, providerName, providerEmail, dateAdded, availability }
        console.log(newCar);

        //update the car to the mongoDB using the axios
        axiosInstance.patch(`/cars/${car._id}`, newCar)
            .then(data => {
                if (data.data.modifiedCount) {
                    form.reset();
                    Swal.fire({
                        title: "Car updated successfully!",
                        icon: "success",
                        background: "#1f2937",
                        color: "#ffffff",
                    });
                    navigate(-1)
                }

            }
            )

    }
    return (
        <div className="hero bg-[url('https://images.unsplash.com/photo-1512827618699-c1906f7e688b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxjYXJ8ZW58MHx8MHx8fDA%3D')] hero-overlay bg-black/60 min-h-screen">
            <div className='hero-overlay bg-black/60'></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full md:w-96 max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold ">Update the car!</h1>
                        <form onSubmit={handleUpdateCar}>
                            <fieldset className="fieldset">

                                {/* Car Name */}
                                <label className="label">Car Name</label>
                                <input type="text" name='carName' className="input w-full" defaultValue={car.carName} />

                                {/* Description */}
                                <label className="label">Description</label>
                                <input type="text" name='description' className="input w-full" defaultValue={car.description} />

                                {/* category */}
                                <label className='label'>Category</label>
                                <select className='bg-base-200 py-2 px-1' defaultValue={car.category} name='category'>
                                    <option value="SUV">SUV</option>
                                    <option value="SEDAN">SEDAN</option>
                                    <option value="HATCHBACK">HATCHBACK</option>
                                    <option value="LUXURY">LUXURY</option>
                                    <option value="ELECTRIC">ELECTRIC</option>
                                </select>

                                <div className='flex gap-2'>
                                    {/* rent price */}
                                    <div className='flex-col'>
                                        <label className="label">Rent Price  $</label>
                                        <input type="text" name='rentPrice' className="input " defaultValue={car.rentPricePerDay} />
                                    </div>

                                    {/* location */}
                                    <div className='flex-col'>
                                        <label className="label">Location</label>
                                        <input type="text" name='location' className="input" defaultValue={car.location}/>

                                    </div>
                                </div>

                                {/* Hosted Image */}
                                <label className="label">Hosted Image</label>
                                <input type="text" name='hostedImage' className="input w-full" placeholder="Hosted Image" defaultValue={car.hostedImageURL}/>

                                {/*Provider name*/}
                                <label className="label">Provider name</label>
                                <input type="text" name='providerName' className="input w-full" value={user.displayName} readOnly />

                                {/* provider email */}
                                <label className="label">Provider email</label>
                                <input type="text" name='providerEmail' className="input w-full" value={user.email} readOnly />

                                <label className="label">Car availability</label>

                                <div className='flex gap-2 p-4 border border-[#49505a] label rounded'>
                                    <p>Is the car available?</p>

                                    <input type="radio" name="availability" id="yes" defaultChecked={car.availability===true} value={true} />
                                    <label for="yes">Yes</label>

                                    <input type="radio" name="availability" id="no" defaultChecked={car.availability===false} value={false} />
                                    <label for="no">No</label>
                                </div>


                                <button type='submit' className="btn h-12  mt-2 bg-warning text-black font-bold">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCar;