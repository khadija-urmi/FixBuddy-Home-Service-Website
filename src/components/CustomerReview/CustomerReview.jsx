import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CustomerReview = () => {
  const { darkMode } = useContext(AuthContext);
  const reviews = [
    {
      text: "Amazing service! Highly recommend.",
      name: "John Doe",
      avatar: "https://i.ibb.co.com/hxYJSWkk/1.jpg",
    },
    {
      text: "Professional and timely delivery!",
      name: "Jane Smith",
      avatar: "https://i.ibb.co.com/9vdVC7F/admin-2.png",
    },
    {
      text: "Outstanding support and quality work!",
      name: "Emily Johnson",
      avatar: "https://i.ibb.co.com/JwK5D9Zf/2.jpg",
    },
    {
      text: "Great experience, I will use their services again.",
      name: "Michael Brown",
      avatar: "https://i.ibb.co.com/46gLvwt/3.jpg",
    },
    {
      text: "Reliable and affordable services.",
      name: "Sarah Davis",
      avatar: "https://i.ibb.co.com/fGVvjvHc/6.jpg",
    },
    {
      text: "So friendly & maintain a hygienic",
      name: "Sara Ali Khan",
      avatar: "https://i.ibb.co.com/RTjwK4NP/7.jpg",
    },
  ];

  return (
    <div className="mt-16 w-full lg:w-11/12 mx-auto  py-20 px-8">
      <div className="w-2/5 mx-auto divider divider-accent text-xl lg:text-3xl font-bold text-center ">
        <span>What Our Clients Say</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`p-6 shadow-lg   border-2  border-l-blue-300 rounded-md ${
              darkMode
                ? "bg-gray-800 border-2 border-gray-800 border-l-blue-300  text-white"
                : "bg-white"
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full mr-4"
              />
              <p className="font-bold">{review.name}</p>
            </div>
            <p className="text-gray-500">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
