import React, { useEffect, useState } from 'react';
import { Search } from 'react-feather'
import { TableRoom } from '../room/TableRoom'
import { Plus } from 'react-feather'
import { useForm } from 'react-hook-form'
import { useRoom } from '../../hooks/useRoom'
import { useHotel } from '../../hooks/useHotel';
import { FaRegSadCry } from 'react-icons/fa';
import { IoCloudUploadOutline } from "react-icons/io5";
import { getRoomsByIdAdmin } from '../../services';
import { MdDelete } from "react-icons/md";

export const Rooms = ({ user }) => {

    const { getRooms, isFetching, rooms, addRoom } = useRoom();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [photoUploaded, setPhotoUploaded] = useState(false);
    const { getHotelsByAdmin, hotels } = useHotel();

    useEffect(() => {
        getRooms(user.id);
    }, [user.id]);

    useEffect(() => {
        getHotelsByAdmin(user.id);
    }, [user.id]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result;
                setSelectedPhoto(imageData);
                setPhotoUploaded(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleRemovePhoto = () => {
        setSelectedPhoto(null);
        setPhotoUploaded(false);
    };

    const onSubmit = async (data) => {
        const img = selectedPhoto;
        const { numberRoom, price, desc, availability, capacity, hotel } = data;
        const userId = user.id;
        await addRoom({ numberRoom, price, desc, availability, capacity, img, hotel}, userId);
        reset();
        document.getElementById('my_modal_2').close();
        // Después de agregar un hotel, actualiza la lista de hoteles
        getRooms(userId);
    };

    const close = () => {
        document.getElementById('my_modal_2').close();
        reset();
        setPhotoUploaded(false);
        setSelectedPhoto(null);
    };

    return (
        <>
            <section className="container px-4 mx-auto mt-6">
                <div className="mt-6 md:flex md:items-center md:justify-end">

                    <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <Search className='ml-3 text-gray-700' />
                        </span>
                        <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none focus:ring-opacity-40" />
                    </div>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-3xl font-medium text-gray-800">Habitaciones</h2>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Administacion de Habitaciones</p>
                    </div>
                    <div className="flex items-center mt-4 gap-x-3">
                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                            onClick={() => document.getElementById('my_modal_2').showModal()}>
                            <Plus /> Add room
                        </button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Agregar Nueva Habitacion</h3>
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
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address ? "border-red-500" : ""}`}
                                            id="price"
                                            type="text"
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
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address ? "border-red-500" : ""}`}
                                            id="desc"
                                            type="text"
                                            placeholder="Descripción"
                                        />
                                        {errors.desc && <p className="text-red-500 text-xs italic mt-2">La descripción de la habitación es requerida</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="availability">
                                            Estado
                                        </label>
                                        <input
                                            {...register("availability", { required: true })}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? "border-red-500" : ""}`}
                                            id="availability"
                                            type="text"
                                            placeholder="Estado"
                                        />
                                        {errors.availability && <p className="text-red-500 text-xs italic mt-2">El Estado de la habitación es requerido</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="capacity">
                                            Capacidad
                                        </label>
                                        <input
                                            {...register("capacity", { required: true })}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
                                            id="capacity"
                                            type="text"
                                            placeholder="Capacidad"
                                        />
                                        {errors.capacity && <p className="text-red-500 text-xs italic mt-2">La capacidad de la habitación es requerida</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="hotel">
                                            Hotel
                                        </label>
                                        <select
                                            {...register("hotel", { required: true })}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.hotel ? "border-red-500" : ""}`}
                                            id="hotel"
                                        >
                                            <option value="">Seleccione un hotel</option>
                                            {hotels.map(hotel => (
                                                <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                                            ))}
                                        </select>
                                        {errors.hotel && <p className="text-red-500 text-xs italic mt-2">El hotel es requerido</p>}
                                    </div>
                                    <div className="mb-4">
                                        <div className="relative w-full">
                                            {!photoUploaded && (
                                                <div
                                                    className={`items-center justify-center max-w-xl mx-auto ${dragging ? 'bg-gray-200' : ''}`}
                                                    onDrop={handleDrop}
                                                    onDragOver={handleDragOver}
                                                    onDragLeave={handleDragLeave}
                                                >
                                                    <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                                                        <span className="flex items-center space-x-2">
                                                            <IoCloudUploadOutline />
                                                            <span className="font-medium text-gray-600">Suelta los archivos para adjuntar, o<span className="text-blue-600 underline ml-[4px]">explorar</span></span>
                                                        </span>
                                                        <input type="file" name="file_upload" className="hidden"
                                                            accept="image/png,image/jpeg" id="input"
                                                            {...register("photo", {
                                                                required: "Imagen requerida",
                                                                onChange: handleFileChange
                                                            })}
                                                        />
                                                    </label>
                                                </div>
                                            )}
                                            {selectedPhoto && (
                                                <div className="mt-4 w-full h-32 relative">
                                                    <img src={selectedPhoto} alt="Vista previa" className="w-full h-full object-cover rounded-md" />
                                                    <button
                                                        type="button"
                                                        onClick={handleRemovePhoto}
                                                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 focus:outline-none"
                                                    >
                                                        <MdDelete size={20} />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        {errors.photo && <span className="text-red-500 text-xs italic mt-2">{errors.photo.message}</span>}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Agregar Room
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
                            <form method="dialog" className="modal-backdrop"></form>
                        </dialog>
                    </div>
                </div>
            </section>
            {isFetching ? (
                <>
                    <div className="flex items-center h-96 justify-center flex-col gap-4">
                        <FaRegSadCry size={100} />
                        <p className="text-gray-500 text-lg ">
                            ¡Oops! No hay habitaciones aun
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <TableRoom rooms={rooms} getRoomsByIdAdmin={getRooms} />
                </>
            )}
        </>
    )
}
