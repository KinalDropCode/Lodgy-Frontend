import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useHotel } from '../../hooks/useHotel';

export const Card = ({ data, getHoteles }) => {

    const { _id, name, address, phone, email, img, desc } = data;
    const { removeHotel } = useHotel()

    const onDelete = async () => {
        await removeHotel(_id);
        window.location.reload()
    }

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
                <div className="card-actions justify-end">
                    <button className="hover:text-red-600" onClick={onDelete}><FaTrashAlt /></button>
                </div>
            </div>
        </div>
    );
};
