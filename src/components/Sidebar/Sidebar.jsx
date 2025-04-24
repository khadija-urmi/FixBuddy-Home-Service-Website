import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { darkMode } = useContext(AuthContext);
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center py-2 px-2 space-x-3 bg-blue-600 text-white hover:rounded hover:cursor-pointer hover:bg-blue-700 rounded-md"
      : "group flex items-center py-2 px-2 space-x-3 bg-blue-400 text-white hover:rounded hover:cursor-pointer hover:bg-blue-600";

  return (
    <div className="bg-blue-400 text-white h-screen px-4 fixed w-20 md:w-64 border-r border-gray-300 ">
      <ul className="flex flex-col mt-3 space-y-1">
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
      </ul>
    </div>
  );
};

export default Sidebar;
