import { Menu, Home, Briefcase } from "react-feather";
import icon from "../../../public/logov2.svg";
import { MdSpaceDashboard } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { FaHotel } from "react-icons/fa6";
import { FaLuggageCart } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <>
            <nav className="sticky top-0 w-72 h-screen flex-col justify-between shadow-lg  hidden md:flex -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
                <div className="bg-white h-full">
                    <div className="flex justify-center py-10 pr-4">
                        <img src={icon} alt="icon" className="w-28" />
                        <div className="pl-2">
                            <p className="text-2xl font-bold text-[#643914]">LODGY</p>
                            <span className="text-xs block text-gray-800">DASHBOARD</span>
                        </div>
                    </div>
                    <div className="pl-10">
                        <ul className="space-y-8 pt-10">
                            <li className="flex space-x-4 items-center hover:text-[#643914] cursor-pointer">
                                <GoHomeFill size={24} />
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="flex space-x-4 items-center hover:text-[#643914] cursor-pointer">
                                <MdSpaceDashboard size={24} />
                                <Link to="/dashboard/">Dashboard</Link>
                            </li>
                            <li className="flex space-x-4 items-center hover:text-[#643914] cursor-pointer">
                                <FaLuggageCart size={24} />
                                <Link to="/dashboard/hotel">Hoteles</Link>
                            </li>
                            <li className="flex space-x-4 items-center hover:text-[#643914] cursor-pointer">
                                <FaBed size={24} />
                                <Link to="/dashboard/room">Habitaciones</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
