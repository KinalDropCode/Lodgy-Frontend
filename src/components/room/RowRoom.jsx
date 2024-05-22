import React from 'react'
import { Trash2, Edit2 } from 'react-feather';

export const RowRoom = ({ data, getRooms }) => {
    const { _id, numberRoom, price, availability, capacity, hotel } = data;

    const handleDelete = () => {
        // Lógica para eliminar la habitación
    };

    const handleEdit = () => {
        // Lógica para editar la habitación
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
                            onClick={handleEdit}
                            className='flex items-center p-1 hover:text-blue-600'
                        >
                            <Edit2 />
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};
