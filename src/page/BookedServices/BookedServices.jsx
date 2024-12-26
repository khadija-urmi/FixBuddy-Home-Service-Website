import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import NoDataFound from "../../components/NoDataFound/NoDataFound";

const BookedServices = () => {
    const { user } = useContext(AuthContext);
    const [bookedServices, setBookedServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookedServices = async () => {
            try {
                const response = await axios.get(`
https://home-repair-server.vercel.app/bookedServices/${user.email}`);
                setBookedServices(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch booked services:", error);
                setLoading(false);
            }
        };

        fetchBookedServices();
    }, [user.email]);

    if (loading) {
        return <p>Loading booked services...</p>;
    }

    if (bookedServices.length === 0) {
        return <NoDataFound></NoDataFound>;
    }

    return (
        <div className="max-w-7xl mx-auto mt-10 mb-10">
            <h1 className="text-2xl font-bold mb-4">My Booked Services</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Service Name</th>
                        <th>Booking Date</th>
                        <th>Status</th>
                        <th>Price (BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    {bookedServices.map((service, index) => (
                        <tr key={service._id}>
                            <th>{index + 1}</th>
                            <td>{service.serviceName}</td>
                            <td>{service.serviceTakingDate}</td>
                            <td className="badge badge-outline text-emerald-500 bg-emerald-100/60 text-center align-middle ">{service.serviceStatus}</td>
                            <td>{service.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookedServices;
