import { useNavigate } from "react-router-dom";
import { createHotel, getHotelsByIdAdmin, deleteHotel } from "../services";
import { useState } from "react";
import toast from "react-hot-toast";


export const useHotel = () => {
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate()

    const getHotelsByAdmin = async (id) => {
        const response = await getHotelsByIdAdmin(id);

        if (response.error) {
            console.log(response.e); // Imprime el objeto de error
            console.log(response.e?.response); // Imprime la respuesta del servidor
            console.log(response.e?.response?.data); // Imprime los datos de la respuesta
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al listar')
        }

        setHotels(response.data)
    }

    const addHotel = async (data, id) => {
        const response = await createHotel(id, data);
        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
    }

    const removeHotel = async (id) => {
        console.log(id)
        const response = await deleteHotel(id);
        console.log(response.data)
        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
    }
    return {
        getHotelsByAdmin,
        isFetching: hotels.length === 0,
        addHotel,
        removeHotel,
        hotels
    }
}