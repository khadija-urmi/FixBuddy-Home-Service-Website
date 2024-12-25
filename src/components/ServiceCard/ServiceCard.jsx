import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();
    const handleSeeDetails = (id) => {
        navigate(`/services/${id}`);
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
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
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <h4 className="text-md font-medium">{service.provider.userName}</h4>
                        <p className="text-sm text-gray-500">{service.provider.userEmail}</p>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <p className="text-lg font-semibold">Price: {service.price} BDT</p>
                    <button onClick={() => handleSeeDetails(service._id)} className="text-blue-600 hover:underline"
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