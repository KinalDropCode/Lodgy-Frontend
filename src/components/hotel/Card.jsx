import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useHotel } from '../../hooks/useHotel';
import { Link } from 'react-router-dom';
import { Edit2 } from 'react-feather';
import { useForm } from 'react-hook-form';

export const Card = ({ data, getHotels, role = "" }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { _id, name, address, phone, email, img, desc } = data;
    const { removeHotel, updateHotel } = useHotel()

    const onDelete = async () => {
        await removeHotel(_id);
        getHotels();
    }

    const onSubmit = async (data) => {
        const { name, address, phone, email, desc } = data;
        updateHotel({ name, address, phone, email, desc }, _id);
        document.getElementById('my_modal_3').close();
        reset();
        window.location.reload()
    };

    const close = () => {
        document.getElementById('my_modal_3').close();
        reset();
    };


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-full">
            <figure className="w-72 h-72 bg-cover">
                <img src={img} alt="Album" className="object-cover w-full h-full" />
            </figure>
            <div className="card-body w-2/3 h-full flex flex-col justify-between">
                <h2 className="card-title">{name}</h2>
                <p>{address}</p>
                <p>{phone}</p>
                <p>{email}</p>
                <p>{desc}</p>
                {role && role === 'ADMIN_ROLE' ? (
                    <>
                        <div className="card-actions justify-end items-center">
                            <button className="hover:text-blue-400" onClick={() => document.getElementById('my_modal_3').showModal()}><Edit2 size={20} /></button>
                            {/* INICIO DE MODAL */}
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Editar Hotel</h3>
                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4" autoComplete='off'>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                                Nombre
                                            </label>
                                            <input
                                                {...register("name", { required: true })}
                                                defaultValue={name}
                                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`}
                                                id="name"
                                                type="text"
                                                placeholder="Nombre del Hotel"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs italic mt-2">El nombre del hotel es requerido</p>}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                                                Dirección
                                            </label>
                                            <input
                                                {...register("address", { required: true })}
                                                defaultValue={address}
                                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address ? "border-red-500" : ""}`}
                                                id="address"
                                                type="text"
                                                placeholder="Dirección del Hotel"
                                            />
                                            {errors.address && <p className="text-red-500 text-xs italic mt-2">La dirección del hotel es requerida</p>}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                                                Teléfono
                                            </label>
                                            <input
                                                {...register("phone", { required: true })}
                                                defaultValue={phone}
                                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? "border-red-500" : ""}`}
                                                id="phone"
                                                type="text"
                                                placeholder="Teléfono del Hotel"
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs italic mt-2">El teléfono del hotel es requerido</p>}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                                Email
                                            </label>
                                            <input
                                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                                defaultValue={email}
                                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
                                                id="email"
                                                type="email"
                                                placeholder="Correo Electrónico del Hotel"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs italic mt-2">El correo electrónico del hotel es requerido y debe ser válido</p>}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold mb-2" htmlFor="desc">
                                                Descripción
                                            </label>
                                            <textarea
                                                {...register("desc", { required: true })}
                                                defaultValue={desc}
                                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.desc ? "border-red-500" : ""}`}
                                                id="desc"
                                                placeholder="Descripción del Hotel"
                                            />
                                            {errors.desc && <p className="text-red-500 text-xs italic mt-2">La descripción del hotel es requerida</p>}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                Agregar Hotel
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
                            <button className="hover:text-red-600" onClick={onDelete}><FaTrashAlt size={20} /></button>
                            <Link to={`/hotel/${_id}`} className="btn btn-primary">Ver habitaciones</Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="card-actions justify-end">
                            <Link to={`/hotel/${_id}`} className="btn btn-primary">Ver habitaciones</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
