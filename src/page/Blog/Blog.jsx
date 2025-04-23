import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ColorRing } from "react-loader-spinner";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./BlogData.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
  });

  if (loading) {
    return (
      <div className="text-center mt-16">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

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
                <button className="btn btn-outline btn-info mt-6">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
