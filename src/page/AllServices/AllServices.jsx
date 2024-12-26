import axios from "axios";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllServices = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        axios.get("http://localhost:5000/services")
            .then((res) => {
                setServices(res.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen py-4">
            <div className="container mx-auto mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {services.length > 0 ? (
                        services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))
                    ) : (
                        <p>Loading services...{loading}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllServices;