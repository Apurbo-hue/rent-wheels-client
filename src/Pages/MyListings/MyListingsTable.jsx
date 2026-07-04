import React from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const MyListingsTable = ({ cars }) => {
    const axiosInstance = useAxios();

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosInstance.delete(`/cars/${id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }

        });
    }
    return (
        <div className="overflow-x-auto rounded-xl border border-base-300 shadow-lg">
            <table className="table">
                {/* Table Head */}
                <thead className="bg-base-200 text-base">
                    <tr>
                        <th>#</th>
                        <th>Car Name</th>
                        <th>Category</th>
                        <th>Rent Price</th>
                        <th>Status</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {cars.map((car, index) => (
                        <tr key={car._id} className="hover">
                            {/* Serial */}
                            <td>{index + 1}</td>

                            {/* Car Name */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={car.hostedImageURL}
                                        alt={car.carName}
                                        className="w-16 h-12 rounded-lg object-cover"
                                    />

                                    <div>
                                        <p className="font-semibold">{car.carName}</p>
                                    </div>
                                </div>
                            </td>

                            {/* Category */}
                            <td>
                                <span className="badge badge-primary">
                                    {car.category}
                                </span>
                            </td>

                            {/* Price */}
                            <td className="font-semibold">
                                ${car.rentPricePerDay}/day
                            </td>

                            {/* Status */}
                            <td>
                                {car.availability ? (
                                    <span className="badge badge-success">
                                        Available
                                    </span>
                                ) : (
                                    <span className="badge badge-error">
                                        Booked
                                    </span>
                                )}
                            </td>

                            {/* Actions */}
                            <td>
                                <div className="flex justify-center gap-2">

                                    <button className="btn btn-sm btn-info text-white">
                                        Update
                                    </button>

                                    <button onClick={() => handleDelete(car._id)} className="btn btn-sm btn-error text-white">
                                        Delete
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyListingsTable;