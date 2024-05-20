import React from 'react'

export const RowRoom = ({ data, getRooms }) => {
    const { _id, numberRoom, price, availability, capacity, hotel } = data;

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
            </tr>
        </>
    );
};
