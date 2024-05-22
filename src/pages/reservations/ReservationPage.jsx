import Navbar from "../../components/navbar/Navbar"
import { RowReservation } from "../../components/reservation/RowReservation";
import { useReservation } from '../../hooks/useReservation';
import { useEffect } from "react";

export const ReservationPage = () => {

    const { getReservationByUser, reservations } = useReservation();
    useEffect(() => {
        getReservationByUser()
    }, []);

    return (
        <>
            <Navbar />
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <div className="max-h-[44rem] overflow-y-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        <th className="px-4 py-3">Hotel</th>
                                        <th className="px-4 py-3">Habitación</th>
                                        <th className="px-4 py-3">Check In</th>
                                        <th className="px-4 py-3">Check Out</th>
                                        <th className="px-4 py-3">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {reservations.map(reservation => (
                                        <RowReservation key={reservation.uid} data={reservation}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
