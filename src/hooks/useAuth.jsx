import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest, login as loginRequest } from '../services'
import toast from "react-hot-toast";


export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

     const logout = () => {
        localStorage.removeItem("user");
      
        window.location.href = "./";
      };
      

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

    const login = async (email, password) => {
        setIsLoading(true)

        const response = await loginRequest({
            email,
            password
        })
        setIsLoading(false)

        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al iniciar sesión, intenta de nuevo')
        }

        const { userDetails } = response.data
        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')
    }

    return {
        registerUser,
        isLoading,
        login,
        logout
    }
}