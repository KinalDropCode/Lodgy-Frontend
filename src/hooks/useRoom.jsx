import React from 'react'
import { useState } from 'react'
import { getRoomsByIdAdmin, createRoom, deleteRoom, editRoom, searchRoomsByNumberRoom, getRoomsByIdHotel } from '../services';

export const useRoom = () => {
    const [rooms, setRooms] = useState([]);

    const getRoomsByAdmin = async (id) => {
        const response = await getRoomsByIdAdmin(id);
        if (response.error) {
            console.error(response.error);
            toast.error(response.e?.response?.data || 'Ocurrió un error al obtener las habitaciones');
        }
        setRooms(response.data);
    };

    const addRoom = async (data, id) => {
        const response = await createRoom(id, data);
        if (response.error) {
            console.log(response.error)
            console.log(response.data)
            console.log(response.e)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
    }

    const getRoomsByHotel = async (id) => {
        const response = await getRoomsByIdHotel(id);
        if (response.error) {
            console.log(response.error)
            console.log(response.data)
            console.log(response.e)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
        setRooms(response.data);
    }

    const removeRoom = async (id) => {
        const response = await deleteRoom(id);
        if (response.error) {
            return toast.error(response.e?.response?.data || 'Ocurrió un error al eliminar')
        }
    }

    const updateRoom = async (newData, idRoom) => {
        const response = await editRoom(idRoom, newData);
        if (response.error) {
            console.log(response.error)
            console.log(response.data)
            console.log(response.e)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
    };

    const searchRoomByNumber = async (numberRoom) => {
        try {
            const response = await searchRoomsByNumberRoom(numberRoom);
            if (response.error) {
                console.error(response.error);
                toast.error(response.e?.response?.data || 'Ocurrió un error al buscar la habitación');
            } else {
                setRooms(response.data);
            }
        } catch (error) {
            console.error('Error searching room by number:', error);
            toast.error('Ocurrió un error al buscar la habitación');
        }
    };

    return {
        getRoomsByAdmin,
        isFetching: rooms.length === 0,
        rooms,
        addRoom,
        removeRoom,
        updateRoom,
        searchRoomByNumber,
        getRoomsByHotel
    };
};
