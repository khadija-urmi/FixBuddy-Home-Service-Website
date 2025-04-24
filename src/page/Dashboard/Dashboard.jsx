import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import userImg from "../../assets/user.png";

const Dashboard = () => {
  const { user, setUser, updateUserProfile, darkMode } =
    useContext(AuthContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      setError("Name and Photo URL cannot be empty.");
      return;
    }

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL: photo,
        }));
        setSuccess("Profile updated successfully!");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  if (!user) {
    return (
      <div>
        <p>No user found. Please log in.</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8  ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6 text-center pt-10">
        Welcome, {user.displayName || "User"}!
      </h1>
      <div
        className={` shadow-lg rounded-lg p-6 w-full max-w-md ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="flex flex-col items-center mb-6 ">
          <img
            src={user.photoURL || userImg}
            alt="User Avatar"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold">
            {user.displayName || "User"}
          </h2>
          <p className="text-gray-400">{user.email}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={` shadow-lg rounded-lg p-6 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } w-full max-w-md`}
        >
          {error && <p className="text-red-600 mb-4">{error}</p>}
          {success && <p className="text-green-600 mb-4">{success}</p>}
          <div className="mb-4">
            <label
              className={`block mb-2 ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              className={`w-full px-4 py-2 border rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "border-gray-300"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className={`block mb-2 ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Photo URL
            </label>
            <input
              type="text"
              className={`w-full px-4 py-2 border rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "border-gray-300"
              }`}
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
