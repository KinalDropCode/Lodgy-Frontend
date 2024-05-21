import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useHotel } from '../../hooks/useHotel';
import { Link } from 'react-router-dom';

export const Card = ({ data, getHotels, role = "" }) => {

    const { _id, name, address, phone, email, img, desc } = data;
    const { removeHotel } = useHotel()

    const onDelete = async () => {
        await removeHotel(_id);
        getHotels();
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
                {role && role === 'ADMIN_ROLE' ? (
                    <>
                        <div className="card-actions justify-end items-center">
                            <button className="hover:text-red-600" onClick={onDelete}><FaTrashAlt /></button>
                            <button className="btn btn-primary">Ver habitaciones</button>
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
