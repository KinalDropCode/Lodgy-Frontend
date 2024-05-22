import { useNavigate } from "react-router-dom";
import { createEvent, getEventsByIdUser, getEventsByIdHotel, deleteEvent } from "../services";
import { useState } from "react";
import toast from "react-hot-toast";


export const useEvent = () => {

    const [events, setEvents] = useState([]);

    const getEventsByUser = async (id) => {
        try {
            const response = await getEventsByIdUser(id);
            if (response.error) {
                console.error(response.error);
                toast.error(response.e?.response?.data || 'Ocurrió un error al obtener los eventos');
            } else {
                setEvents(response.data);
            }
        } catch (error) {
            console.error('Error fetching events:', error);
            toast.error('Ocurrió un error al obtener los eventos');
        }
    };

    const addEvent = async (data) => {
        console.log("hola", data)
        const response = await createEvent(data);
        if (response.error) {
            console.log(response.e)
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar')
        }
    }

    return {
        getEventsByUser,
        isFetching: events.length === 0,
        events,
        addEvent,
    }
}