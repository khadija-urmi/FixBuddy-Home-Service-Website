import DarkModeToggle from "react-dark-mode-toggle";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { darkMode, setDarkMode } = useContext(AuthContext);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center py-2 px-2 space-x-3 bg-blue-600 text-white hover:rounded hover:cursor-pointer hover:bg-blue-700 rounded-md"
      : "group flex items-center py-2 px-2 space-x-3 text-white hover:rounded hover:cursor-pointer hover:bg-gray-600";

  return (
    <div className="bg-gray-800 text-white p-4 h-screen  fixed w-20 md:w-64 border-r border-gray-300 ">
      <div className="flex justify-around items-center">
        <h1 className="text-xl font-bold hidden md:block mt-4">FixBuddy</h1>
        <DarkModeToggle
          onChange={setDarkMode}
          checked={darkMode}
          size={40}
          className="mt-4"
        />
      </div>
      <ul className="flex flex-col mt-6 space-y-1">
        <li>
          <NavLink to="addService" className={getNavLinkClass}>
            Add Service
          </NavLink>
        </li>
        <li>
          <NavLink to="manageService" className={getNavLinkClass}>
            Manage Services
          </NavLink>
        </li>
        <li>
          <NavLink to="bookedServices" className={getNavLinkClass}>
            Booked Services
          </NavLink>
        </li>
        <li>
          <NavLink to="profile" className={getNavLinkClass}>
            Update Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
