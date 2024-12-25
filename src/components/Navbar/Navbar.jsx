import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";

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

    const getNavLinkClass = ({ isActive }) =>
        isActive
            ? "border-2 border-teal-800 font-bold"
            : "text-white hover:text-blue-400 transition-colors duration-200";

    return (
        <div className="bg-gradient-to-r from-teal-300 via-teal-400 to-teal-300">
            <div className="navbar max-w-7lg mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* Mobile Menu Button */}
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={toggleMenu}
                        >
                            {menuOpen ? <IoClose className="w-8 h-8" /> : <IoMenu className="w-8 h-8" />}
                        </div>
                        {/* Mobile  Dropdown Menu  */}
                        {menuOpen && (
                            <ul className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <NavLink to="/" className="text-black" onClick={closeMenu}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allServices" className="text-black" onClick={closeMenu}>
                                        Services
                                    </NavLink>
                                </li>
                                {user ? (
                                    <li>
                                        <div>
                                            <button
                                                className="w-full text-left"
                                                onClick={toggleDashboard}
                                            >
                                                Dashboard
                                            </button>
                                            {dashboardOpen && (
                                                <ul className="absolute left-0 top-5 mt-3 bg-white text-gray-800 rounded-md shadow-lg p-2 w-40">
                                                    <li>
                                                        <NavLink to="/addService" className="text-blue-600 hover:bg-slate-300" onClick={closeMenu}>
                                                            Add Service
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/bookedServices" className="text-blue-600 hover:bg-slate-300" onClick={closeMenu}>
                                                            Booked Services
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/serviceToDo" className="text-blue-600 hover:bg-slate-300" onClick={closeMenu}>
                                                            Service-To-Do
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </li>
                                ) : (
                                    <li>
                                        <NavLink to="/login" className="text-black" onClick={closeMenu}>
                                            Login
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                        <NavLink to="/" className="text-2xl font-bold text-white">
                            FixBuddy
                        </NavLink>
                    </div>
                </div>
                {/*  large device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/" className={`${getNavLinkClass} text-lg`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/allServices" className={`${getNavLinkClass} text-lg`}>
                                Services
                            </NavLink>
                        </li>
                        {user && (
                            <li className="relative">
                                <button
                                    className={`text-white text-lg ${dashboardOpen ? "underline" : ""}`}
                                    onClick={toggleDashboard}
                                >
                                    Dashboard
                                </button>
                                {dashboardOpen && (
                                    <ul className="absolute left-0 top-5 mt-3 bg-white text-gray-800 rounded-md shadow-lg p-2 w-40">
                                        <li>
                                            <NavLink to="/addService" className="text-blue-600 hover:bg-slate-300" onClick={closeMenu}>
                                                Add Service
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/bookedServices" className="text-blue-600 hover:bg-slate-300" onClick={closeMenu}>
                                                Booked Services
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/serviceToDo" className="text-blue-600 hover:bg-slate-300" onClick={closeMenu}>
                                                Service-To-Do
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
                                        {user.photoURL ? (
                                            <img
                                                src={user.photoURL}
                                                alt="user"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-lg font-bold">
                                                {user.email?.charAt(0).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                    <div className="absolute right-0 w-max bg-white border border-gray-200 rounded-md shadow-lg p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 mt-2">
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={logOut}
                                    className="bg-btn_primary hover:bg-btn_primary_hover text-white px-4 py-2 rounded-md transition-colors duration-300"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <NavLink to="/login">
                                <button className="bg-btn_primary hover:bg-btn_primary_hover text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    Login
                                </button>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
