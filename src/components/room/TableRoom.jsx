import React from 'react'
import { RowRoom } from './RowRoom'

export const TableRoom = () => {
    return (
        <>
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <div className="max-h-[44rem] verflow-y-auto ">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Age</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {[...Array(12)].map((_, index) => (
                                        <RowRoom key={index}/>
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
