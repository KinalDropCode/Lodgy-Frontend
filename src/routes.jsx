import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login"
import { RegisterPage } from "./pages/register";

const routes = [
    { path: '/*', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> }


]

export default routes