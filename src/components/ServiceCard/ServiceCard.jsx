import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const ServiceCard = ({ service }) => {
  const { darkMode } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSeeDetails = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div
      className={`rounded-lg shadow-md p-6 ${
        darkMode ? "bg-gray-700 text-white " : "bg-white "
      }`}
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
        <img
          src={service.imageUrl}
          alt={service.serviceName}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        {/*  Name */}
        <h3 className="text-xl font-semibold">{service.serviceName}</h3>
        {/*  Description */}
        <p className="text-sm text-gray-600 mt-2">
          {service.description.length > 100
            ? `${service.description.substring(0, 100)}...`
            : service.description}
        </p>

        <div className="mt-4 flex items-center">
          <img
            src={service.provider.userPhotoURL}
            alt={service.provider.userName}
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h4 className="text-md font-medium">{service.provider.userName}</h4>
            <p className="text-sm text-gray-500">
              {service.provider.userEmail}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-semibold">Price: {service.price} BDT</p>
          <button
            className="sm:text-xs md:text-sm lg:text-base bg-blue-500 hover:bg-blue-600 text-white px-2 lg:px-4 py-1 lg:py-2 rounded-md transition-colors duration-300"
            onClick={() => handleSeeDetails(service._id)}
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    serviceName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    provider: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      userEmail: PropTypes.string.isRequired,
      userPhotoURL: PropTypes.string.isRequired,
    }).isRequired,
    serviceArea: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ServiceCard;
