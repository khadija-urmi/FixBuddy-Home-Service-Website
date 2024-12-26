const CustomerReview = () => {
    const reviews = [
        {
            text: "Amazing service! Highly recommend.",
            name: "John Doe",
            avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png"
        },
        {
            text: "Professional and timely delivery!",
            name: "Jane Smith",
            avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png"
        },
        {
            text: "Outstanding support and quality work!",
            name: "Emily Johnson",
            avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png"
        },
        {
            text: "Great experience, I will use their services again.",
            name: "Michael Brown",
            avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png"
        },
        {
            text: "Reliable and affordable services.",
            name: "Sarah Davis",
            avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png"
        }, {
            text: "So friendly & maintain a hygienic",
            name: "Sara Ali Khan",
            avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png"
        }
    ];

    return (
        <div className="mt-14 bg-green-200 py-20">
            <h3 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 shadow-md rounded-md">
                        <div className="flex items-center mb-4">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <p className="font-bold">{review.name}</p>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReview;
