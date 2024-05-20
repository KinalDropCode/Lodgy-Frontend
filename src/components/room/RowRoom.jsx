import React from 'react'

export const RowRoom = ({ data, getRooms }) => {

    const { _id, numberRoom, price, availability, capacity, hotel } = data;

    return (
        <>
            <tr key={_id} className="text-gray-700">
                <td className="px-4 py-3 text-md font-semibold border">{numberRoom}</td>
                <td className="px-4 py-3 text-md font-semibold border">{price}</td>
                <td className="px-4 py-3 text-md font-semibold border">{availability}</td>
                <td className="px-4 py-3 text-md font-semibold border">{capacity}</td>
                <td className="px-4 py-3 text-md font-semibold border">{hotel}</td>
            </tr>
        </>
    )
}
