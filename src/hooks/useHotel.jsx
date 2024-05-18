import { Await } from "react-router-dom";
import { createHotel } from "../services";
import { useState } from "react";


const useHotel = () => {
    const create = async (data) => {
        const reponse = await createHotel(data)

    }
}