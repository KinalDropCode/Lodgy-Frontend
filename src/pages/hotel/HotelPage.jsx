import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useRoom } from '../../hooks/useRoom';
import { Card } from '../../components/room/Card';
import Navbar from '../../components/navbar/Navbar';

export const HotelPage = () => {
    const { hotelId } = useParams();
    const { getRoomsByHotel, rooms, isFetching } = useRoom();

    useEffect(() => {
        getRoomsByHotel(hotelId);
    }, [hotelId]);

    return (
        <>
            <Navbar />
            <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
                {isFetching ? (
                    <div className="flex items-center h-48 justify-center">
                        <p className="text-gray-500 text-lg ">
                            ¡Oops! Parece que aún no hay habitaciones disponibles. ¡Mantén un ojo aquí para futuras actualizaciones!
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                            {rooms.map(room => (
                                <Card key={room.uid} data={room} hotelId={hotelId} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
