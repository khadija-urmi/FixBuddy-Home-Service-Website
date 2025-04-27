import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  const location = useLocation();

  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <div className="flex ">
      {isDashboardPage && <Sidebar />}
      <div className="grow ml-20 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
