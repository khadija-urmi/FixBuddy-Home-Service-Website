import axios from "axios";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Hourglass } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [visibleServices, setVisibleServices] = useState(6);
  const [sortOrder, setSortOrder] = useState("asc");
  const { loading, darkMode } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://home-repair-server.vercel.app/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleServices((prev) => prev + 6);
  };

  const handleSortChange = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedServices = [...services].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div
        className={`min-h-screen py-4  ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="container mx-auto mt-20">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                Sort by Price:
              </label>
              <select
                id="sort"
                onChange={handleSortChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.length > 0 ? (
              sortedServices
                .slice(0, visibleServices)
                .map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))
            ) : (
              <div className="flex items-center justify-center min-h-screen">
                <p className="text-center">
                  <Hourglass
                    visible={true}
                    height="96"
                    width="96"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={["#306cce", "#72a1ed"]}
                  />
                  {loading}
                </p>
              </div>
            )}
          </div>

          {services.length > visibleServices && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white py-2 px-6 
                rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllServices;
