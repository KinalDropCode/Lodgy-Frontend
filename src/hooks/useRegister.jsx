import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from '../services'
import toast from "react-hot-toast";


export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const registerUser = async (name, email, password, img) => {
        console.log(name, email, password, 'Hola')

        setIsLoading(true)

        const response = await registerRequest({
            name,
            email,
            password,
            img
        })
        setIsLoading(false)

        if (response.error) {
            console.log(response.e); // Imprime el objeto de error
            console.log(response.e?.response); // Imprime la respuesta del servidor
            console.log(response.e?.response?.data); // Imprime los datos de la respuesta
            return toast.error(response.e?.response?.data || 'Ocurrio un error al iniciar sesion, intenta de nuevo')
        }

        navigate('/login')
    }
    return {
        registerUser,
        isLoading
    }
}