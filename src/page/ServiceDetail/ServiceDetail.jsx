
import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";


const ServiceDetail = () => {
    //const { id } = useParams();
    const singleServiceData = useLoaderData();
    // const navigate = useNavigate();

    const { serviceName, description, price, imageUrl, provider, serviceArea } = singleServiceData;

    return (
        <div className="card container max-w-3xl mx-auto bg-base-200 shadow-xl mt-6 p-4">
            <h2 className="text-2xl font-bold mb-6">{serviceName || "Service Details"}</h2>
            <div className="flex flex-col  gap-6">
                {/* Service Image */}
                <img
                    src={imageUrl}
                    alt={serviceName || "Service Image"}
                    className="w-full rounded-lg"
                />
                <div className="flex-1 text-lg">
                    {/* Provider Information */}
                    <div className="mb-4 flex items-center">
                        <img
                            src={provider?.userPhotoURL}
                            alt={provider?.userName}
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <h4 className="text-md font-medium">{provider?.userName || "N/A"}</h4>
                            <p className="text-sm text-gray-500">{provider?.userEmail || "N/A"}</p>
                        </div>
                    </div>
                    {/* Service Details */}
                    <p className="text-black font-bold mb-4">
                        <IoLocationOutline className="w-8 h-8" />Service Area:
                        <span className="text-gray-700 font-medium">{serviceArea || "N/A"}</span>
                    </p>
                    <p className="text-black font-bold mb-4">
                        Price: <span className="text-gray-700 font-medium">{price || "N/A"} BDT</span>
                    </p>
                    <p className="text-black font-bold mb-4">
                        Description: <span className="text-gray-700 font-medium">{description || "N/A"}</span>
                    </p>

                    <button
                        className=" bg-btn_primary text-white px-4 
                            py-4 mt-4 mb-10 rounded w-60 hover:bg-btn_primary_hover"
                    >Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
