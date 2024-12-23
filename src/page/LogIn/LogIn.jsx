import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lottie/login.json";
import { AuthContext } from "../../context/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const { setUser, signInUser, signWithGoogle } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    console.log('in signIn page', location)
    const from = location.state || '/';
    console.log("navigation ", navigate);
    console.log("from data", from);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        signInUser(email, password).then((result) => {
            const user = result.user;
            console.log("user login", user);
            setUser(user);
        })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleGoogleLogin = () => {
        signWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                setError("Google Login Error:", error.message);
            });
    };

    return (
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center min-h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <Lottie animationData={loginLottie} className="w-3/4" />
            </div>
            {/* Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-6">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg shadow-blue-300 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Log In
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="my-4 border-b text-center">
                        <div
                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                        >
                            Or log in with
                        </div>
                    </div>
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500 mt-4 flex items-center justify-center space-x-2"
                    >
                        <FaGoogle className="w-5 h-5" />
                        <span>Login with Google</span>
                    </button>
                    <div className="text-center mt-4">
                        <p className="text-gray-900">
                            Don&apos;t have an account?{" "}
                            <Link
                                to="/register"
                                className="text-blue-700 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                    {error && (
                        <div className="mt-4 text-sm text-red-600">{error}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
