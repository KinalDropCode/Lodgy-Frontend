import React from 'react'
import { useState } from 'react'
import { getRoomsByIdAdmin, createRoom } from '../services';

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

    const addRoom = async (data, id) => {
        const response = await createRoom(id, data);
        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
    }

    return {
        getRooms,
        isFetching: rooms.length === 0,
        rooms,
        addRoom
    };
};
