import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/home-logo.jpg";

const Navbar2 = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDashboard = () => setDashboardOpen(!dashboardOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setDashboardOpen(false);
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "bg-blue-500 text-white font-bold underline"
      : "hover:bg-gray-500 hover:text-white ";

  return (
    <div className="navbar bg-white max-w-7lg mx-auto px-4 sm:px-6 lg:px-8 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <IoClose className="w-8 h-8" />
            ) : (
              <IoMenu className="w-8 h-8" />
            )}
          </div>
          {/* Mobile  Dropdown Menu  */}
          {menuOpen && (
            <div
              className={`absolute z-50 left-0 right-0 top-8 shadow-lg p-2 rounded-lg ${
                menuOpen ? "" : "hidden"
              }`}
            >
              <ul className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-56 p-2 shadow bg-white space-y-2">
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
                          <ul className="absolute left-0 top-5 mt-3 z-50 bg-slate-600 text-slate-100 rounded-md shadow-lg p-2 w-40">
                            <li>
                              <NavLink
                                to="/addService"
                                className="text-blue-600 hover:bg-slate-300"
                                onClick={closeMenu}
                              >
                                Add Service
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/manageService"
                                className="text-blue-600
                             hover:bg-slate-300"
                                onClick={closeMenu}
                              >
                                Manage Services
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/bookedServices"
                                className="text-blue-600 hover:bg-slate-300"
                                onClick={closeMenu}
                              >
                                Booked Services
                              </NavLink>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                    <li>
                      <NavLink to="/blog">Blogs</NavLink>
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
          <NavLink to="/" className="text-sm lg:text-2xl font-bold text-black">
            FixBuddy
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
            <details>
              <summary>Dashbroad</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar2;
