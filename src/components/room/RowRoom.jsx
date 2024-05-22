import React from 'react';
import { Trash2, Edit2 } from 'react-feather';
import { useRoom } from '../../hooks/useRoom';
import { useForm } from 'react-hook-form';

export const RowRoom = ({ data, getRooms }) => {
    const { uid, numberRoom, price, desc, availability, capacity, hotel } = data;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { removeRoom, updateRoom } = useRoom();

    const handleDelete = () => {
        removeRoom(uid);
        window.location.reload();
    };

    const onSubmit = async (data) => {
        const { numberRoom, price, desc, capacity } = data;
        console.log("hoadasdas", uid)
        updateRoom({ numberRoom, price, desc, capacity }, uid)
        document.getElementById('my_modal_3').close();
        window.location.reload();
        reset();
    };

    const close = () => {
        document.getElementById('my_modal_3').close();
        reset();
    };

    return (
        <>
            <tr className="text-gray-700">
                <td className="px-4 py-3 border">{numberRoom}</td>
                <td className="px-4 py-3 border">{price}</td>
                <td className="px-4 py-3 border">
                    <span className={`px-2 py-1 font-semibold leading-tight rounded-sm ${availability === 'ENABLED' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
                        {availability === 'ENABLED' ? 'ENABLED' : 'DISABLED'}
                    </span>
                </td>
                <td className="px-4 py-3 border">{capacity}</td>
                <td className="px-4 py-3 border">{hotel.name}</td>
                <td className="px-4 py-3 border">
                    <div className='flex space-x-2'>
                        <button
                            onClick={handleDelete}
                            className='flex items-center p-1 hover:text-red-500'
                        >
                            <Trash2 />
                        </button>
                        <button
                            onClick={() => document.getElementById('my_modal_3').showModal()}
                            className='flex items-center p-1 hover:text-blue-600'
                        >
                            <Edit2 />
                        </button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Editar Habitacion</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-4" autoComplete='off'>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="numberRoom">
                                            No. Habitación
                                        </label>
                                        <input
                                            {...register("numberRoom", { required: true })}
                                             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`}
                                            id="numberRoom"
                                            type="text"
                                            placeholder="No. Habitación"
                                        />
                                        {errors.numberRoom && <p className="text-red-500 text-xs italic mt-2">El numero de habitación es requerido</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                                            Precio
                                        </label>
                                        <input
                                            {...register("price", { required: true })}
                                            defaultValue={price}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address ? "border-red-500" : ""}`}
                                            id="price"
                                            type="number"
                                            placeholder="Precio"
                                        />
                                        {errors.price && <p className="text-red-500 text-xs italic mt-2">El precio de la habitación es requerido</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="desc">
                                            Descripción
                                        </label>
                                        <input
                                            {...register("desc", { required: true })}
                                            defaultValue={desc}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address ? "border-red-500" : ""}`}
                                            id="desc"
                                            type="text"
                                            placeholder="Descripción"
                                        />
                                        {errors.desc && <p className="text-red-500 text-xs italic mt-2">La descripción de la habitación es requerida</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="capacity">
                                            Capacidad
                                        </label>
                                        <input
                                            {...register("capacity", { required: true })}
                                            defaultValue={capacity}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
                                            id="capacity"
                                            type="text"
                                            placeholder="Capacidad"
                                        />
                                        {errors.capacity && <p className="text-red-500 text-xs italic mt-2">La capacidad de la habitación es requerida</p>}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Editar Room
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={close}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </td>
            </tr>
        </>
    );
};
