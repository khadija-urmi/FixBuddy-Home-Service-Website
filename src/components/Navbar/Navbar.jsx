import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const getNavLinkClass = ({ isActive }) => {
        return isActive
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-800 hover:text-blue-600 transition-colors duration-300";
    }
    return (
        <nav className="backdrop-blur-md bg-white/30 sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                        <NavLink to="/" className="text-2xl font-bold text-blue-600">
                            FixBuddy
                        </NavLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                            {menuOpen ? (
                                <IoClose className="w-8 h-8" />
                            ) : (
                                <IoMenu className="w-8 h-8" />
                            )}
                        </button>
                    </div>
                    {menuOpen && (
                        <div className="absolute top-16 right-0 w-52 bg-blue-400 shadow-lg md:hidden">
                            <div className="flex flex-col items-center py-4">
                                <NavLink
                                    to="/home"
                                    className={getNavLinkClass}>
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={getNavLinkClass}>
                                    About
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={getNavLinkClass}
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={getNavLinkClass}
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    )}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={getNavLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/service" className={getNavLinkClass}>
                            Find Service
                        </NavLink>
                        <NavLink to="/my-service" className={getNavLinkClass}>My Services</NavLink>
                        <NavLink to="/addService" className={getNavLinkClass}>Add A Service</NavLink>
                        <NavLink to="/dashboard" className={getNavLinkClass}>
                            Dashboard
                        </NavLink>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <div className="relative group">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer">
                                        {user.photoURL ? (
                                            <img
                                                src={user?.photoURL}
                                                alt="user"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-xl font-bold">
                                                {user?.email?.charAt(0).toUpperCase()}
                                            </span>
                                        )}
                                    </div>

                                    <div className="absolute right-0 w-max bg-white border border-gray-200 rounded-md shadow-lg p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 mt-2">
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>
                                </div>
                                <button onClick={logOut} className="bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <>
                                <NavLink to="/login">
                                    <button className="bg-blue-600/90
                                    hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                        Login
                                    </button>
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                                >
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;