
import { useContext } from "react";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Modal from 'react-modal';


const ServiceDetail = () => {
    const { user } = useContext(AuthContext);

    const singleServiceData = useLoaderData();
    // const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const currentUser = {
        email: user.email,
        name: user.displayName,
    };

    const { serviceName, description, price, imageUrl, provider, serviceArea } = singleServiceData;
    const handlePurchase = (e) => {
        e.preventDefault();
        console.log("Purchase form submitted");
    }
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

                    <button onClick={() => { setModalOpen(true) }}
                        className=" bg-btn_primary text-white px-4 
                            py-4 mt-4 mb-10 rounded w-60 hover:bg-btn_primary_hover"
                    >Book Now</button>
                </div>
            </div>
            {/* Modal for Booking */}
            <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} ariaHideApp={false}>
                <h2 className="text-2xl font-semibold mb-4">Book This Service</h2>
                <form onSubmit={handlePurchase} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Service Name</label>
                        <input type="text" value={serviceName} disabled className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Service Image</label>
                        <input type="text" value={imageUrl} disabled className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Provider Name</label>
                        <input type="text" value={provider?.userName} disabled className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Provider Email</label>
                        <input type="text" value={provider?.userEmail} disabled className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Current User Name</label>
                        <input type="text" value={currentUser.name} disabled className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Current User Email</label>
                        <input type="text" value={currentUser.email} disabled className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" value={price} disabled className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Service Booking Date</label>
                        <input type="date" name="serviceTakingDate" required className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Special Instructions</label>
                        <textarea name="specialInstruction" placeholder="Any special instructions..." className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Purchase
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default ServiceDetail;
