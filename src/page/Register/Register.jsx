import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        photoURL: "",
    });

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const validationPassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasPasswordLength = password.length >= 6;

        if (!hasUpperCase) return "Password must have at least one uppercase letter.";
        if (!hasLowerCase) return "Password must have at least one lowercase letter.";
        if (!hasPasswordLength) return "Password must be at least 6 characters long.";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        const { name, email, password, photoURL } = formData;
        console.log(name, email, password, photoURL);

        const passwordValidated = validationPassword(password);
        if (passwordValidated) {
            setError(passwordValidated);
            return;
        }
        setError("");
        try {
            await createUser(email, password);
            await updateUserProfile({ displayName: name, email: email });

            //add new user in db
            const response = await axios.post("https://home-repair-server.vercel.app/register", {
                name,
                email,
                password
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful!",
                    text: "Your details have been saved.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setFormData({ name: "", email: "", password: "", photoURL: "" });
                navigate("/");
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "Registration failed.";
            setError(errorMessage);

            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: errorMessage,
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Register
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="photoURL"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Photo URL
                        </label>
                        <input
                            type="url"
                            id="photoURL"
                            name="photoURL"
                            value={formData.photoURL}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Register
                    </button>
                </form>
                {error && (
                    <div className="mt-4 text-sm
                     text-red-600">{error}</div>
                )}

            </div>
        </div>
    );
};

export default Register;
