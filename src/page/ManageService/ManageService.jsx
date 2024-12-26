import { useEffect, useState } from "react";
import axios from "axios";

const ManageService = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch bookings on component mount
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("http://localhost:5000/booking", {
                    withCredentials: true, // Send cookies for authentication
                });
                setBookings(response.data); // Store the bookings data
                setLoading(false); // Set loading to false
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchBookings();
    }, []);

    if (loading) {
        return <p>Loading your bookings...</p>;
    }

    if (bookings.length === 0) {
        return <p>You have no bookings yet.</p>;
    }

    return (
        <div>
            <h1>Your Bookings</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        <h2>Service Name: {booking.serviceName}</h2>
                        <p>Booking Date: {booking.serviceTakingDate}</p>
                        <p>Status: {booking.serviceStatus}</p>
                        <p>Price: {booking.price} BDT</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageService;
