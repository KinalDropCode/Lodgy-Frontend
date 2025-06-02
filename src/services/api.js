import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/lodgy/v1',
    timeout: 5000
});


apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');

        if (userDetails) {
            const { token } = JSON.parse(userDetails);
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const updateUser = async (data) => {
    try {
        return await apiClient.put('/auth/userEdit', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteUser = async () => {
    try {
        return await apiClient.delete('/auth/');

    } catch (error) {
        return {
            error: true,
            e
        }
    }
}

export const createHotel = async (id, data) => {
    try {
        return await apiClient.post(`/hotel/${id}`, data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const editHotel = async (idHotel, data) => {
    try {
        return await apiClient.put(`/hotel/${idHotel}`, data);
    } catch (error) {
        return {
            error: true,
            e: error
        }
    }
}

export const getHotelsByIdAdmin = async (id) => {
    try {
        return await apiClient.get(`/hotel/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getHotels = async () => {
    try {
        return await apiClient.get(`/hotel/`);
    } catch (error) {
        return {
            error: true,
            e
        }
    }
}


export const deleteHotel = async (id) => {
    try {
        return await apiClient.delete(`/hotel/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getRoomsByIdAdmin = async (id) => {
    try {
        return await apiClient.get(`/room/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const createRoom = async (id, data) => {
    try {
        return await apiClient.post(`/room/${id}`, data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteRoom = async (id) => {
    try {
        return await apiClient.delete(`/room/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const editRoom = async (idRoom, data) => {
    try {
        return await apiClient.put(`/room/${idRoom}`, data);
    } catch (error) {
        return {
            error: true,
            e: error
        }
    }
}

export const searchRoomsByNumberRoom = async (numberRoom) => {
    try {
        return await apiClient.get('/search', { params: { numberRoom } });
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getRoomsByIdHotel = async (id) => {
    try {
        return await apiClient.get(`/room/hotel/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const createReservation = async (data) => {
    try {
        return await apiClient.post(`/reservation/`, data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getReservationByIdUser = async () => {
    try {
        return await apiClient.get(`/reservation/`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const createEvent = async (data) => {
    try {
        return await apiClient.post(`/event/`, data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getEventsByIdUser = async (id) => {
    try {
        return await apiClient.get(`/event/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getEventsByIdHotel = async (id) => {
    try {
        return await apiClient.get(`/event/hotel/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteEvent = async (id) => {
    try {
        return await apiClient.delete(`/event/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}