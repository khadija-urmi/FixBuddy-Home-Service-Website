import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

const BlogDetails = () => {
  const { blogId } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/BlogData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const selectedArticle = data.articles.find(
          (article) => article.id === parseInt(blogId)
        );
        setArticle(selectedArticle);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, [blogId]);

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

  if (!article) {
    return (
      <div className="text-center mt-16">
        <h3>Blog post not found!</h3>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-16">
      <div className="max-w-6xl mx-auto p-8 card lg:card-side bg-base-100 shadow-2xl">
        <figure>
          <img src={article.image} alt={article.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <p>{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
