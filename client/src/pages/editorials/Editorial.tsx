import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { editorials } from "../../context/editorials";

export default function Editorial() {
  const { id } = useParams();
  const article = editorials.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!article) return <div className="p-6">Article not found</div>;

  const currentIndex = editorials.findIndex((a) => a.id === id);
  const prevArticle = editorials[currentIndex - 1];
  const nextArticle = editorials[currentIndex + 1];

  return (
    <div className="bg-white rounded-lg p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{article.date} </span>
        <span> {article.category}</span>
      </p>
      <div className="max-w-md mx-auto bg-blue-100 p-3 rounded-lg">
        <h2 className="font-semibold mb-3">{article.context.header}</h2>
        <p className="whitespace-pre-line">{article.context.passage}</p>
      </div>
      {article.content.map((passage: string, idx: number) => (
        <div key={idx} className="my-6">
          <p className="mt-2 text-gray-800 whitespace-pre-line">{passage}</p>
        </div>
      ))}
      <img src={article.photo} alt={article.title} className="h-96 mx-auto" />
      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6 border-t mt-8">
        {prevArticle ? (
          <Link
            to={`/editorial/${prevArticle.id}`}
            className="px-4 py-2 border border-highlight-1 hover:bg-highlight-1 hover:text-white rounded transition-all duration-150 ease-in-out"
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        {nextArticle ? (
          <Link
            to={`/editorial/${nextArticle.id}`}
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
