import axios from "axios";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Hourglass } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [visibleServices, setVisibleServices] = useState(6);
  const { loading } = useContext(AuthContext);

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

  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="bg-gray-100 min-h-screen py-4">
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.length > 0 ? (
              services
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

          {/* Show More Button */}
          {services.length > visibleServices && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
