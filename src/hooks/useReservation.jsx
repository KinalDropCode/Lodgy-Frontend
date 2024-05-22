import { useNavigate } from "react-router-dom";
import { createReservation} from "../services";
import { useState } from "react";
import toast from "react-hot-toast";


export const useReservation = () => {

    const addReservation = async (data, id) => {
        const response = await createReservation(id, data);
        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
    }

    return {
        addReservation,
    }
}