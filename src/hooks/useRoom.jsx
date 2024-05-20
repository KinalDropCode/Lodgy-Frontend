import React from 'react'
import { useState } from 'react'
import { getRoomsByIdAdmin } from '../services';

export const useRoom = () => {
    const [rooms, setRooms] = useState([]);

    const getRooms = async (id) => {
        try {
            const response = await getRoomsByIdAdmin(id);
            if (response.error) {
                console.error(response.error);
                toast.error(response.e?.response?.data || 'Ocurrió un error al obtener las habitaciones');
            } else {
                setRooms(response.data);
            }
        } catch (error) {
            console.error('Error fetching rooms:', error);
            toast.error('Ocurrió un error al obtener las habitaciones');
        }
    };

    return {
        getRooms,
        isFetching: rooms.length === 0,
        rooms
    };
};
