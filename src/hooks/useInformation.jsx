import React from 'react'
import toast from "react-hot-toast";
import { updateUser, deleteUser as deleteUserService } from '../services';
import { useAuth } from './useAuth';

export const useInformation = () => {
    const { logout } = useAuth()

    const deleteUser = async () => {
        const response = await deleteUserService();
        if (response.error) {
            console.log(response.e);
            return toast.error(
                response.e?.response?.data ||
                'Ocurrió un error al actualizar la data del canal'
            )
        }
        toast.success('Cuenta eliminada exitosamente');
        setTimeout(() => {
            logout();
        }, 1500);
    }

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

        toast.success('Información actualizada exitosamente');
        setTimeout(() => {
            logout();
        }, 1500);
    }

    return {
        update,
        deleteUser
    }
}
