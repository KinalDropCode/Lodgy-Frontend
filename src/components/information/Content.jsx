import { Route, Routes } from "react-router-dom";
import { Profile } from "./Profile";

export const Content = ({ useDetails }) => {
    return (
        <div className="w-full py-1 md:w-2/3 lg:w-3/4">
            <Routes  >
                <Route path="/*" element={<Profile user={useDetails} />} />
            </Routes>
        </div>
    )
}
