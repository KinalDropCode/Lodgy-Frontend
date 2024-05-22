import React, { useState } from 'react';
import { Plus } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useReservation } from '../../hooks/useReservation';
import toast from 'react-hot-toast';

export const Card = ({ data, hotelId }) => {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const { uid, numberRoom, price, desc, availability, capacity, img } = data;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addReservation } = useReservation();



    const calculateTotalPrice = (checkIn, checkOut) => {
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const nights = (end - start) / (1000 * 60 * 60 * 24);
        return nights * price;
    };

    const now = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato YYYY-MM-DD

    const onSubmit = async (formData) => {
        const { checkIn, checkOut, observation } = formData;
        const totalPrice = calculateTotalPrice(checkIn, checkOut);
        await addReservation({ hotel: hotelId, room: uid, checkIn, checkOut, totalPrice, observation });
        setIsModalOpen(false);
        reset();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        reset();
    };

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='p-4 bg-cover' src={img} alt="Room" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{numberRoom}</h2>
                    <p>Q{price}.00</p>
                    <p>{desc}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-md transition-colors duration-300"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Plus className="mr-2" />
                            Reserve
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
                        <h3 className="font-bold text-lg">Reservation</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4" autoComplete='off'>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="checkIn">
                                    Check-In Date
                                </label>
                                <input
                                    {...register("checkIn", { required: true })}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.checkIn ? "border-red-500" : ""}`}
                                    id="checkIn"
                                    type="date"
                                    value={now} // Establecer el valor como la fecha actual
                                    readOnly // Hacer que el campo no sea editable
                                />
                                {errors.checkIn && <p className="text-red-500 text-xs italic mt-2">Check-In date is required</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="checkOut">
                                    Check-Out Date
                                </label>
                                <input
                                    {...register("checkOut", { required: true })}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.checkOut ? "border-red-500" : ""}`}
                                    id="checkOut"
                                    type="date"
                                />
                                {errors.checkOut && <p className="text-red-500 text-xs italic mt-2">Check-Out date is required</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="observation">
                                    Observation
                                </label>
                                <textarea
                                    {...register("observation")}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="observation"
                                    placeholder="Any observations (optional)"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Reserve
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};