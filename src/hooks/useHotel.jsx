import { createHotel } from "../services";
import { useState } from "react";
import { getHotels as getHotelsRequest } from "../services";
import toast from "react-hot-toast"; // Asegúrate de importar toast si lo usas

export const useHotel = () => {
    const [hotels, setHotels] = useState(null);

    const getHotels = async () => {
        const hotelsData = await getHotelsRequest();
        
        if (hotelsData.error) {
            toast.error(
                hotelsData.e?.response?.data || 'Ocurrió un error al leer los hoteles'
            );
            return;
        }

        setHotels(hotelsData.data.hotels);
    };

    return {
        getHotels,
        isFetching: !Boolean(hotels),
        allHotels: hotels
    };
};