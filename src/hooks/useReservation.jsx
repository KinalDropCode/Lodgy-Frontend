import { useNavigate } from "react-router-dom";
import { createReservation, getReservationByIdUser} from "../services";
import { useState } from "react";
import toast from "react-hot-toast";


export const useReservation = () => {

    const [reservations, setReservation] = useState([]);

    const getReservationByUser = async (id) => {
        try {
            const response = await getReservationByIdUser(id);
            if (response.error) {
                console.error(response.error);
                toast.error(response.e?.response?.data || 'Ocurrió un error al obtener las habitaciones');
            } else {
                setReservation(response.data);
            }
        } catch (error) {
            console.error('Error fetching rooms:', error);
            toast.error('Ocurrió un error al obtener las habitaciones');
        }
    };

    const addReservation = async (data, id) => {
        const response = await createReservation(id, data);
        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
    }

    return {
        getReservationByUser,
        isFetching: reservations.length === 0,
        reservations,
        addReservation,
    }
}