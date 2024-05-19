import { Route, Routes } from "react-router-dom";
import { Hotel } from "./Hotel";
import { DashBoard } from "./Dashboard";
import { useLocation } from "react-router-dom";
import { Rooms } from "./Rooms";

export const Content = ({ useDetails }) => {
    const location = useLocation();
    console.log("Ruta actual:", location.pathname);

    return (
        <>
            <div className="flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="/hotel" element={<Hotel user={useDetails} />} />
                    <Route path="/room" element={<Rooms />} />
                </Routes>
            </div>
        </>
    )
} 