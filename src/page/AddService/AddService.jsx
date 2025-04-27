import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const AddService = () => {
  const { user, darkMode } = useContext(AuthContext);
  console.log("user", user);

  const initialFormState = {
    serviceName: "",
    imageUrl: "",
    price: "",
    serviceArea: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceData = {
      ...formData,
      provider: {
        userName: user?.displayName,
        userEmail: user?.email,
        userPhotoURL: user?.photoURL,
      },
    };

    axios
      .post("https://home-repair-server.vercel.app/services", serviceData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setFormData(initialFormState);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your service has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("full services info", serviceData);
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-8 ${
        darkMode ? "bg-gray-900" : "bg-green-100"
      }`}
    >
      <div
        className={` p-8 rounded-lg shadow-lg w-full max-w-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl font-semibold text-center mb-6 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Add New Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="imageUrl"
              className={`block ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="serviceName"
              className={`block ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className={`block ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="serviceArea"
              className={`block ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              Service Area
            </label>
            <input
              type="text"
              id="serviceArea"
              name="serviceArea"
              value={formData.serviceArea}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className={`block ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-emerald-800"
                : "bg-blue-500 text-white hover:bg-emerald-700"
            }`}
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
