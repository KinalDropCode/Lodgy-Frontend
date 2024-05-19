import React, { useEffect, useState } from 'react';
import { Plus } from 'react-feather';
import { FaRegSadCry } from "react-icons/fa";
import { useHotel } from '../../hooks/useHotel';
import { Card } from '../hotel/Card';
import { useForm } from 'react-hook-form';
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export const Hotel = ({ user }) => {
    const { getHotelsByAdmin, hotels: allHotels, isFetching, addHotel } = useHotel();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [photoUploaded, setPhotoUploaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        getHotelsByAdmin(user.id);
    }, [user.id]);

    useEffect(() => {
        // Filtrar hoteles cuando el término de búsqueda cambie
        const filteredHotels = allHotels.filter(hotel =>
            hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setHotels(filteredHotels);
    }, [allHotels, searchTerm]);

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
        const { name, address, phone, email, desc } = data;
        const userId = user.id;
        await addHotel({ name, address, phone, email, img, desc }, userId);
        reset();
        document.getElementById('my_modal_2').close();
        // Después de agregar un hotel, actualiza la lista de hoteles
        getHotelsByAdmin(userId);
    };

    const close = () => {
        document.getElementById('my_modal_2').close();
        reset();
        setPhotoUploaded(false);
        setSelectedPhoto(null);
    };

    return (
        <>
            <div className="container px-4 mx-auto">
                <div className="flex flex-col h-full">
                    <div className="flex justify-end items-center mb-4 space-x-4">
                        <button
                            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-md transition-colors duration-300"
                            onClick={() => document.getElementById('my_modal_2').showModal()}
                        >
                            <Plus className="mr-2" />
                            Agrega Hotel
                        </button>
                        <dialog id="my_modal_2" className="modal h-full">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Agregar Nuevo Hotel</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-4" autoComplete='off'>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                            Nombre
                                        </label>
                                        <input
                                            {...register("name", { required: true })}
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
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.desc ? "border-red-500" : ""}`}
                                            id="desc"
                                            placeholder="Descripción del Hotel"
                                        />
                                        {errors.desc && <p className="text-red-500 text-xs italic mt-2">La descripción del hotel es requerida</p>}
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
                            <form method="dialog" className="modal-backdrop"></form>
                        </dialog>
                        <div id="search-bar" className="w-120 bg-white rounded-md shadow-lg z-10">
                            <form className="flex items-center justify-center p-2">
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                    {isFetching ? (
                        <div className="flex items-center h-96 justify-center flex-col gap-4">
                            <FaRegSadCry size={100} />
                            <p className="text-gray-500 text-lg ">
                                ¡Oops! Parece que aún no hay hoteles para administrar. ¡Intenta ingresar tu hotel!
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-4 w-full">
                            {hotels.map(hotel => (
                                <Card key={hotel._id} data={hotel} getHoteles={getHotelsByAdmin} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
