import { useNavigate } from "react-router-dom";
import { createReservation, getReservationByIdUser } from "../services";
import { useState } from "react";
import toast from "react-hot-toast";


export const useReservation = () => {

    const [reservations, setReservation] = useState([]);

    const getReservationByUser = async () => {
        const response = await getReservationByIdUser();
        if (response.error) {
            console.log(response.e)
            console.error(response.error);
            toast.error(response.e?.response?.data || 'Ocurrió un error al obtener las habitaciones');
        }
        setReservation(response.data);
    };

    const addReservation = async (data) => {
        console.log("hola", data)
        const response = await createReservation(data);
        if (response.error) {
            console.log(response.e)
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
        return toast.success("Se realizo con exito su reservacion")
    }

    return {
        getReservationByUser,
        isFetching: reservations.length === 0,
        reservations,
        addReservation,
    }
}