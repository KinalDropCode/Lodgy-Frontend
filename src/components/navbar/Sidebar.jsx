import { Link } from "react-router-dom";
import logov2 from "../../assets/logov2.svg";
import { useUserDetails } from "../../hooks/useUserDetails";


export const Sidebar = () => {
  const { isLogged, userDetails, logout } = useUserDetails();

  const handleLogout = () => {
    logout()
  }
  return (
    <>
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <div className="flex mb-5">
          <img src={logov2} className="w-[50px]" />
          <span className="font-bold text-2xl	">Lodgy</span>
        </div>
        {!isLogged ? (
          <>
            <li><Link to="/login">Sing In</Link></li>
            <li><Link to="/register" className="my-2">Sing Up</Link>
            </li>
          </>
        ) : (
          <>
            <div className="w-10 flex mb-2 ml-2">
              <img alt="Tailwind CSS Navbar component" className="rounded-full" src={userDetails.img} />
              <span className="ml-2 my-auto w-full">{userDetails.name}</span>
            </div>
          </>
        )}
        <div className="h-px bg-gray-300 border-0"></div>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
      </ul>
    </>
  );
};
