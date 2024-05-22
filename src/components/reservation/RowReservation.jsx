import React from 'react';

export const RowReservation = ({ data }) => {
    console.log(data);
    const { hotel, room, checkIn, checkOut, totalPrice } = data;

    // Función para formatear la fecha en formato legible
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <tr className="text-gray-700">
                <td className="px-4 py-3 border">{hotel.name}</td>
                <td className="px-4 py-3 border">{room.numberRoom}</td>
                <td className="px-4 py-3 border">{formatDate(checkIn)}</td>
                <td className="px-4 py-3 border">{formatDate(checkOut)}</td>
                <td className="px-4 py-3 border">{totalPrice}</td>
            </tr>
        </>
    );
};
