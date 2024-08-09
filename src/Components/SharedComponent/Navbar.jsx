import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, userLoading, logOutUser, userInDb } = useAuth();
  if (userLoading) return <p>Loading...</p>;
  const menu = (
    <>
      <NavLink className="px-3 text-xl capitalize m-1" to="/listing">
        Listing
      </NavLink>
      <NavLink className="px-3 text-xl capitalize m-1" to="/contact">
        Contact
      </NavLink>
      <NavLink className="px-3 text-xl capitalize m-1" to="/about">
        about
      </NavLink>
      <NavLink className="px-3 text-xl capitalize m-1" to="/dashboard">
        dashboard
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 print:hidden">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className=" text-2xl py-2 px-4 text-green-500">
          BariVara
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full ">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : userInDb?.Img
                    ? userInDb?.img
                    : "https://i.ibb.co/dP5hNpk/download.png"
                }
                alt="User"
              />
            </div>
            <button
              className="btn bg-red-500 text-white"
              onClick={() => logOutUser()}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink className="btn capitalize m-1" to="/login">
              login
            </NavLink>
            <NavLink className="btn capitalize m-1" to="/register">
              register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
