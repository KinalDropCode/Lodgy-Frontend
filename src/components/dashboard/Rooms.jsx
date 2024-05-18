import React from 'react'
import { Search } from 'react-feather'
import { TableRoom } from '../room/TableRoom'

export const Rooms = () => {
  return (
    <>
    <section className="container px-4 mx-auto mt-6">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div>
                <div className="flex items-center gap-x-3">
                    <h2 className="text-3xl font-medium text-gray-800">Hoteles</h2>
                </div>
                <p className="mt-1 text-sm text-gray-500">Administacion de hotel</p>
            </div>
            <div className="flex items-center mt-4 gap-x-3">
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    </svg>
                    <span>Add Room</span>
                </button>
            </div>
        </div>
        <div className="mt-6 md:flex md:items-center md:justify-end">

            <div className="relative flex items-center mt-4 md:mt-0">
                <span className="absolute">
                    <Search className='ml-3 text-gray-700' />
                </span>
                <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none focus:ring-opacity-40" />
            </div>
        </div>
    </section>
    <TableRoom/>
</>
  )
}
