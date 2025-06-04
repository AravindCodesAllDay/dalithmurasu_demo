import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { premium } from "../../context/premium";
export default function PremiumArticle() {
  const { id } = useParams();
  const article = premium.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!article) return <div className="p-6">Article not found</div>;

  const currentIndex = premium.findIndex((a) => a.id === id);
  const prevArticle = premium[currentIndex - 1];
  const nextArticle = premium[currentIndex + 1];

  return (
    <div className="bg-white rounded-lg p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p>{article.author}</p>
      <p className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{article.date} </span>
        <span> {article.category}</span>
      </p>
      <div className="flex gap-3">
        {article.photo &&
          article.photo.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={article.title}
              className="my-4 mx-auto h-80 w-64 rounded"
            />
          ))}
      </div>
      {article.content.map((passage: string, idx: number) => (
        <div key={idx} className="my-6">
          <p className="mt-2 text-gray-800 whitespace-pre-line">{passage}</p>
        </div>
      ))}
      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6 border-t mt-8">
        {prevArticle ? (
          <Link
            to={`/premium_articles/${prevArticle.id}`}
            className="px-4 py-2 border border-highlight-1 hover:bg-highlight-1 hover:text-white rounded transition-all duration-150 ease-in-out"
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        {nextArticle ? (
          <Link
            to={`/premium_articles/${nextArticle.id}`}
            className="px-4 py-2 border border-highlight-1 hover:bg-highlight-1 hover:text-white rounded transition-all duration-150 ease-in-out"
          >
            Next →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
