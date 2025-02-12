import { Helmet } from "react-helmet-async";

const Blog = () => {
  const articles = [
    {
      title: "The Importance of Regular Home Maintenance",
      description:
        "Regular home maintenance helps to extend the lifespan of your property and avoid costly repairs in the future.",
      image: "https://i.ibb.co.com/RpLCV6r8/111.jpg",
    },
    {
      title: "5 Essential Home Repairs You Shouldn’t Ignore",
      description:
        "These common home repairs should be taken seriously to ensure the safety and comfort of your home.",
      image: "https://i.ibb.co.com/mrs8byvk/112.jpg",
    },
    {
      title: "How to Choose the Right Cleaning Service",
      description:
        "Finding a reliable cleaning service can improve the quality of your life. Learn how to choose the best service provider.",
      image: "https://i.ibb.co.com/vgkyyRC/113.jpg",
    },
    {
      title: "Cost-Effective Home Renovation Ideas",
      description:
        "Looking to renovate your home on a budget? Check out these cost-effective home renovation ideas.",
      image: "https://i.ibb.co.com/20kMqZxS/114.jpg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className="container mx-auto p-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Home Service Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <a className="text-blue-600 mt-4 inline-block">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
