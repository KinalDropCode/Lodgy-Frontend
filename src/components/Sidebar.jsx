import { Link } from "react-router-dom";
import logov2 from "../assets/logov2.svg";

export const Sidebar = () => {
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
        <li>
          <Link to="/login">Sing In</Link>
        </li>
        <li>
          <Link to="/register" className="my-2">
            Sing Up
          </Link>
        </li>
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
