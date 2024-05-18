import React from 'react'
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <>
            <div className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">

                    <h2 className="pl-3 mb-4 text-2xl font-semibold">Information</h2>

                    <Link To="/information/profile" className="flex items-center px-3 py-2.5 font-bold bg-white text-[#643914] border rounded-full">
                        Profile
                    </Link>
                    <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-[#643914]">
                        Reservations
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-[#643914]">
                        Change password
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 font-semibold bg-red-700  text-white border rounded-full ">
                        Delete account
                    </a>
                </div>
            </div>
        </>
    )
}
