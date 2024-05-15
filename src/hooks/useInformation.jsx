import React from 'react'
import toast from "react-hot-toast";
import { updateUser } from '../services';

export const useInformation = () => {

    const update = async (data) => {
        const response = await updateUser(data);
        console.log(data)
        if (response.error) {
            console.log(response.e);
            return toast.error(
                response.e?.response?.data ||
                'Ocurrió un error al actualizar la data del canal'
            )
        }

        toast.success('Información actualizada exitosamente')
        window.location.reload();

    }

    return {
        update
    }
}
