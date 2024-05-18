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

export const createHotel = async (data) => {
    try {
        return await apiClient.put('/hotel/register', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}