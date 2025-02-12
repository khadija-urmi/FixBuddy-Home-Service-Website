
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/home-logo.jpg"


const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-32">
                <div>
                    <div className="flex  space-x-4 mb-4">
                        <img src={logo} className="w-12 h-12 rounded-md" />
                        <h2 className="text-2xl font-bold mb-4">FixBuddy</h2>
                    </div>
                    <p className="mb-2">Location: block-C,Gulshan-165, Dhaka</p>
                    <p className="mb-2">Phone: 01477232361</p>
                    <p className="mb-2">Email: fix_buddy123@gmail.com</p>
                    <p className="mb-4">Opening hours: 9:00 AM - 5:00 PM</p>
                    <div className="flex items-center space-x-4 mt-6">
                        <FaFacebook className="w-8 h-8" />
                        <FaInstagram className="w-8 h-8" />
                        <FaLinkedin className="w-8 h-8" />
                        <FaTwitter className="w-8 h-8" />
                    </div >
                </div >

                <div>
                    <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Drop a Message</h3>
                    <form className="space-y-4">
                        <input type="email" placeholder="Enter your email"
                            className="w-full py-2 px-4 rounded-md bg-gray-800 text-white
                             focus:outline-none"/>
                        <button
                            className="bg-blue-500 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 hover:bg-blue-600 w-full">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div >
            <aside className="text-center py-2">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by FixBuddy Industries Ltd</p>
            </aside>
        </footer >
    );
};

export default Footer;
