import { Link } from "react-router-dom";
import logov2 from '../../assets/logov2.svg';
import SearchButton from "../SerchButton";
import { Sidebar } from "./Sidebar";
import { useUserDetails } from "../../hooks/useUserDetails";
import { Home } from "react-feather";

const Navbar = () => {
  const { isLogged, userDetails, logout } = useUserDetails();
  const handleLogout = () => {
    logout()
  }
  return (

    <div className="drawer " style={{ zIndex: 1000 }}>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar min-h-20	 bg-[#] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
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
                  <li><Link to="/" className="font-bold transition hover:text-[#947c6c] cursor-pointer mr-4">Home</Link></li>
                  <li><a className="font-bold  transition hover:text-[#947c6c] cursor-pointer mr-4">Reservations</a></li>
                  <li><SearchButton /></li>
                  <div className="w-px bg-gray-300 h-12"></div>


                  {!isLogged ? (
                    <>
                      <li><Link to="/login" className="btn mx-2 my-auto bg-[#947c6c] hover:bg-[#887063] text-white ">Sign In</Link></li>
                      <li><Link to="/register" className="btn mr2 my-auto">Sign Up</Link></li>
                    </>
                  ) : (
                    <>
                      {userDetails.role === 'ADMIN_ROLE' && (
                        <>
                          <div className="dropdown dropdown-end mx-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={userDetails.img} />
                              </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              <li><Link to="/information">Your account</Link></li>
                              <li><Link to="/dashboard">Administration</Link></li>
                              <li><a onClick={handleLogout}>Logout</a></li>
                            </ul>
                          </div>
                        </>
                      )}
                      {userDetails.role === 'USER_ROLE' && (
                        <div className="dropdown dropdown-end mx-2">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                              <img alt="Tailwind CSS Navbar component" src={userDetails.img} />
                            </div>
                          </div>
                          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/information">Your account</Link></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </ul>
              </div>
            </div>
          </>
        </div>
        {/* Page content here */}

      </div>
      <div className="drawer-side">
        <Sidebar />
      </div>
    </div >
  );
};


export default Navbar;