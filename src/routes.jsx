import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login"
import { RegisterPage } from "./pages/register";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { InformationPage } from "./pages/information/InformationPage";
import { HotelPage } from "./pages/hotel";
import { ReservationPage } from "./pages/reservations/ReservationPage";

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/dashboard/*', element: <DashboardPage /> },
    { path: '/information/*', element: <InformationPage /> },
    { path: '/hotel/:hotelId', element: <HotelPage /> },
    { path: '/reservation/', element: <ReservationPage /> },
]

export default routes