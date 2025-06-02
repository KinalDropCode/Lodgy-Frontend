import React from 'react';
import { RowRoom } from './RowRoom';

export const TableRoom = ({ rooms, getRoomsByIdAdmin }) => {
    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <div className="max-h-[44rem] overflow-y-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">No Habitación</th>
                                    <th className="px-4 py-3">Precio</th>
                                    <th className="px-4 py-3">Estado</th>
                                    <th className="px-4 py-3">Capacidad</th>
                                    <th className="px-4 py-3">Hotel</th>
                                    <th className="px-4 py-3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {rooms.map((room) => (
                                    <RowRoom key={room.uid} data={room} getRooms={getRoomsByIdAdmin} />
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};