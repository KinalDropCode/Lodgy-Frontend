import React from 'react'
import { useState } from 'react'

export const useRoom = () => {
    const { room, setRoom } = useState();

    const getRoom = async (id) => {
        const response = await getRooms(id);
        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al iniciar sesión, intenta de nuevo')
        }
        setRoom(response.data);
    }

    return {
        getRoom,
        room
    }
}
