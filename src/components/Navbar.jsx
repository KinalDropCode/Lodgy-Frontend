import { Link } from "react-router-dom";
import logov2 from '../assets/logov2.svg';
import SearchButton from "./SerchButton";
import { Sidebar } from "./Sidebar";

const Navbar = () => {
  return (

    <div className="drawer " style={{ zIndex: 1000 }}>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar  bg-[#] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <>
            <div className="flex-1 justify-around ">
              <div className="flex">
                <img src={logov2} className="w-[80px]" />
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="flex items-center ">
                  {/* Navbar menu content here */}
                  <li><Link to="/home" className="font-bold transition hover:text-[#947c6c] cursor-pointer mr-4">Home</Link></li>
                  <li><a className="font-bold  transition hover:text-[#947c6c] cursor-pointer mr-4">Reservations</a></li>
                  <li><SearchButton /></li>
                  <div className="w-px bg-gray-300 h-12"></div>
                  <li><Link to="/login" className="p-4 rounded-lg cursor-pointer hover:bg-[#887063] transition bg-[#947c6c] hover text-white mx-2">Sign In</Link></li>
                  <li><Link to="/register" className="btn mr2 my-auto">Sign Up</Link></li>
                </ul>
              </div>
            </div>
          </>
        </div>
        {/* Page content here */}

      </div>
      <div className="drawer-side">
        <Sidebar/>
      </div>
    </div>
  );
};


export default Navbar;