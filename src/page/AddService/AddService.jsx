import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const AddService = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: "",
        imageUrl: "",
        price: "",
        photoURL: "",
        serviceArea: "",
        description: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceData = {
            ...formData,
            serviceProvider: {
                userName: user?.displayName || "Anonymous",
                userEmail: user?.email || "Not Provided",
                userPhotoURL: user?.photoURL || "",
            },
        };
        console.log(serviceData);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Add New Service</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="serviceName" className="block text-gray-700">Service Title</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-gray-700">Image </label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="serviceArea" className="block text-gray-700">Service Area</label>
                        <input
                            type="text"
                            id="serviceArea"
                            name="serviceArea"
                            value={formData.serviceArea}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-emerald-500 text-white rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none"
                    >
                        Add Service
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddService;