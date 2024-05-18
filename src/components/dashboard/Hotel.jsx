import React, { useState } from 'react';
import { Search, Plus } from 'react-feather';
import { Card } from '../hotel/Card';

export const Hotel = ({ hotels }) => {
    console.log("Datos de hoteles:", hotels); // Asegúrate de ver los datos en la consola

    const [cards, setCards] = useState([2]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addCard = () => {
        setCards([...cards, cards.length + 1]);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-end items-center mb-4 space-x-4">
                <button
                    className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-md transition-colors duration-300"
                    onClick={() => document.getElementById('my_modal_2').showModal()}
                >
                    <Plus className="mr-2" />
                    Agrega Hotel
                </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                <div id="search-bar" className="w-120 bg-white rounded-md shadow-lg z-10">
                    <form className="flex items-center justify-center p-2">
                        <input
                            type="text"
                            placeholder="Search here"
                            className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
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
            <div className="flex flex-col justify-center items-center gap-4 w-full">
                {hotels?.map((hotel) => (
                    <div key={hotel._id}>
                        <Card
                            id={hotel._id}
                            name={hotel.name}
                            address={hotel.address}
                            phone={hotel.phone}
                            email={hotel.email}
                            rooms={hotel.rooms}
                            reviews={hotel.reviews}
                            events={hotel.events}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};