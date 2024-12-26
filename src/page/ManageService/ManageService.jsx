import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";
import NoDataFound from "../../components/NoDataFound/NoDataFound";

const ManageService = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingService, setEditingService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const userEmail = user.email;
                const response = await axios.get(`http://localhost:5000/booking/${userEmail}`);
                console.log("Bookings fetched:", response.data);
                setBookings(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const handleEdit = (booking) => {
        setEditingService(booking);
        setIsModalOpen(true);
    };
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const updatedData = {
                serviceTakingDate: e.target.serviceTakingDate.value,
                specialInstruction: e.target.specialInstruction.value,
            };

            await axios.put(
                `http://localhost:5000/booking/${editingService._id}`,
                updatedData
            );
            setBookings((prev) =>
                prev.map((booking) =>
                    booking._id === editingService._id
                        ? { ...booking, ...updatedData }
                        : booking
                )
            );

            setIsModalOpen(false);
            Swal.fire("Updated!", "Your booking has been updated.", "success");
        } catch (error) {
            console.error("Failed to update booking:", error);
            Swal.fire("Error!", "Failed to update booking.", "error");
        }
    };
    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this booking?");
        if (confirm) {
            try {
                await axios.delete(`http://localhost:5000/booking/${id}`);
                setBookings((prev) => prev.filter((booking) => booking._id !== id));
                Swal.fire("Deleted!", "Your booking has been deleted.", "success");
            } catch (error) {
                console.error("Failed to delete booking:", error);
                Swal.fire("Error!", "Failed to delete booking.", "error");
            }
        }
    };

    const handleConfirm = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/booking/booked/${id}`);

            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Service confirmed successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setBookings((prev) => prev.filter((booking) => booking._id !== id));
            }
        } catch (error) {
            console.error("Failed to confirm service:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to confirm the service.",
            });
        }
    };

    if (bookings.length === 0) {
        return <NoDataFound></NoDataFound>;
    }
    if (loading) {
        return <p>Loading your bookings...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto mt-10 mb-10">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Booking Date</th>
                        <th>Status</th>
                        <th>Price (BDT)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={booking._id} className="hover">
                            <th>{index + 1}</th>
                            <td>{booking.serviceName}</td>
                            <td>{booking.serviceTakingDate}</td>
                            <td className="badge badge-outline text-blue-500 bg-blue-100/60 text-center align-middle ">{booking.serviceStatus}</td>
                            <td>{booking.price}</td>
                            <td>
                                <button
                                    className="btn btn-primary btn-sm mr-2"
                                    onClick={() => handleEdit(booking)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-error btn-sm mr-2"
                                    onClick={() => handleDelete(booking._id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => handleConfirm(booking._id)}
                                >
                                    Confirm
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Modal */}
            {isModalOpen && editingService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">Edit Booking</h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Booking Date
                                </label>
                                <input
                                    type="date"
                                    name="serviceTakingDate"
                                    defaultValue={editingService.serviceTakingDate}
                                    className="w-full px-4 py-2 border rounded-md shadow-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Special Instructions
                                </label>
                                <textarea
                                    name="specialInstruction"
                                    defaultValue={editingService.specialInstruction}
                                    className="w-full px-4 py-2 border rounded-md shadow-sm"
                                    placeholder="Enter special instructions..."
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ManageService;
