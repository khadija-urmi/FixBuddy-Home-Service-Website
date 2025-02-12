const CustomerReview = () => {
  const reviews = [
    {
      text: "Amazing service! Highly recommend.",
      name: "John Doe",
      avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png",
    },
    {
      text: "Professional and timely delivery!",
      name: "Jane Smith",
      avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png",
    },
    {
      text: "Outstanding support and quality work!",
      name: "Emily Johnson",
      avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png",
    },
    {
      text: "Great experience, I will use their services again.",
      name: "Michael Brown",
      avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png",
    },
    {
      text: "Reliable and affordable services.",
      name: "Sarah Davis",
      avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png",
    },
    {
      text: "So friendly & maintain a hygienic",
      name: "Sara Ali Khan",
      avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png",
    },
  ];

  return (
    <div className="mt-16 w-full lg:w-11/12 mx-auto  py-20 px-8">
      <div className="w-2/5 mx-auto divider divider-accent text-3xl font-bold text-center ">
        <span>What Our Clients Say</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-8">
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
