import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex pt-16">
        <Sidebar></Sidebar>
        <div className="grow ml-20 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
