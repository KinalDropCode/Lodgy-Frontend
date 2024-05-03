import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login"
import { RegisterPage } from "./pages/register";
import { DashboardPage } from "./pages/dashboard/DashboardPage";

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/hoteles', element: <DashboardPage /> },

]

export default routes