import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const getNavLinkClass = ({ isActive }) => {
        return isActive
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-800 hover:text-blue-600 transition-colors duration-300";
    }
    return (
        <nav className="backdrop-blur-md bg-white/30 sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                        <NavLink to="/" className="text-2xl font-bold text-blue-600">
                            FixBuddy
                        </NavLink>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={getNavLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/" className={getNavLinkClass}>
                            Find Service
                        </NavLink>
                        <NavLink to="/" className={getNavLinkClass}>My Services</NavLink>
                        <NavLink to="/" className={getNavLinkClass}>Add A Service</NavLink>
                        <NavLink to="/" className={getNavLinkClass}>
                            Dashboard
                        </NavLink>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
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
                                            <span className="text-xl font-bold">
                                                {user.email?.charAt(0).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                    {/* Tooltip */}
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

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;