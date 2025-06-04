import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { poems } from "../../context/poems";

export default function Poem() {
  const { id } = useParams();
  const article = poems.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!article) return <div className="p-6">Article not found</div>;

  const currentIndex = poems.findIndex((a) => a.id === id);
  const prevArticle = poems[currentIndex - 1];
  const nextArticle = poems[currentIndex + 1];

  return (
    <div className="bg-white rounded-lg p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p>{article.author}</p>
      <p className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{article.date} </span>
        <span> {article.category}</span>
      </p>
      {article.photo && (
        <img
          src={article.photo}
          alt={article.title}
          className="my-4 mx-auto h-80 rounded"
        />
      )}
      <p className="text-gray-800 whitespace-pre-line text-center">
        {article.content}
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6 border-t mt-8">
        {prevArticle ? (
          <Link
            to={`/poem/${prevArticle.id}`}
            className="px-4 py-2 border border-highlight-1 hover:bg-highlight-1 hover:text-white rounded transition-all duration-150 ease-in-out"
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        {nextArticle ? (
          <Link
            to={`/poem/${nextArticle.id}`}
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
