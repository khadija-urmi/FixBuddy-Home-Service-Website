import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink, Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/home-logo.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDashboard = () => setDashboardOpen(!dashboardOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setDashboardOpen(false);
  };
  const getNavLinkClass = ({ isActive }) => {
    return `${
      isActive
        ? "bg-blue-500 text-white font-bold px-3 py-2 rounded-md"
        : "hover:text-blue-400"
    } transition-colors duration-200`;
  };

  return (
    <div className="bg-white navbar fixed top-0 left-0 right-0 w-full z-50 shadow-md box-border px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Button */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <IoMenu className="w-5 h-5" />
            )}
          </div>
          {/* Mobile  Dropdown Menu  */}
          {menuOpen && (
            <div
              className={`absolute z-50 left-0 right-0 top-8 shadow-lg p-2  rounded-lg ${
                menuOpen ? "" : "hidden"
              }`}
            >
              <ul className=" menu-sm dropdown-content rounded-box z-[1] mt-3 w-48 p-2 shadow bg-gray-200 space-y-2">
                <li>
                  <NavLink
                    to="/"
                    className={getNavLinkClass}
                    onClick={closeMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allServices"
                    className={getNavLinkClass}
                    onClick={closeMenu}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className={getNavLinkClass}>
                    Blogs
                  </NavLink>
                </li>
                {user ? (
                  <ul>
                    <li>
                      <div>
                        <button
                          className="w-full text-left"
                          onClick={toggleDashboard}
                        >
                          Dashboard
                        </button>
                        {dashboardOpen && (
                          <ul className="absolute left-5 top-20 mt-3 bg-gray-300 text-gray-800 rounded-md shadow-lg p-2 w-48 h-auto space-y-2">
                            <li>
                              <NavLink
                                to="/addService"
                                className={getNavLinkClass}
                                onClick={closeMenu}
                              >
                                Add Service
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/manageService"
                                className={getNavLinkClass}
                                onClick={closeMenu}
                              >
                                Manage Services
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/bookedServices"
                                className={getNavLinkClass}
                                onClick={closeMenu}
                              >
                                Booked Services
                              </NavLink>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                  </ul>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className="text-black"
                      onClick={closeMenu}
                    >
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="flex-shrink-0 flex items-center lg:space-x-2">
          <img
            src={logo}
            alt="logo"
            className="w-5 lg:w-12 h-5 lg:h-12 rounded-full"
          />
          <Link to="/" className="text-sm lg:text-2xl font-bold text-black">
            FixBuddy
          </Link>
        </div>
      </div>
      {/*  large device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 gap-5 flex">
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allServices" className={getNavLinkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={getNavLinkClass}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={getNavLinkClass}>
              Blogs
            </NavLink>
          </li>
          {user && (
            <li className="relative">
              <NavLink
                to="dashboard"
                className={`${dashboardOpen ? "underline" : ""}`}
                onClick={() => {
                  toggleDashboard();
                }}
              >
                Dashboard
              </NavLink>
              {dashboardOpen && (
                <ul className="absolute left-0 top-5 mt-2 bg-white  rounded-md shadow-lg p-2 w-40 z-50">
                  <li>
                    <NavLink
                      to="/addService"
                      className={getNavLinkClass}
                      onClick={closeMenu}
                    >
                      Add Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manageService"
                      className={getNavLinkClass}
                      onClick={closeMenu}
                    >
                      Manage Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bookedServices"
                      className={getNavLinkClass}
                      onClick={closeMenu}
                    >
                      Booked Services
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center space-x-2 md:space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer">
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute right-0 w-max bg-white border border-gray-200 rounded-md shadow-lg p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 mt-2">
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <button
                onClick={logOut}
                className="sm:text-xs md:text-sm lg:text-base bg-blue-500 hover:bg-blue-600 text-white px-2 lg:px-4 py-1 lg:py-2 rounded-md transition-colors duration-300"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="sm:text-xs md:text-sm lg:text-base bg-blue-500 hover:bg-blue-600 text-white px-2 lg:px-4 py-1 lg:py-2 rounded-md transition-colors duration-300">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="sm:text-xs md:text-sm lg:text-base bg-blue-500 hover:bg-blue-600 text-white px-2 lg:px-4 py-1 lg:py-2 rounded-md transition-colors duration-300">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
