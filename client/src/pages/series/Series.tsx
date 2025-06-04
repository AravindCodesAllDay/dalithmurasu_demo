import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { series } from "../../context/series";

export default function Series() {
  const [search, setSearch] = useState("");

  if (!series) {
    return <p>No context to view</p>;
  }

  const filteredArticles = series.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-highlight-1/65">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-6 grid gap-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border bg-white rounded w-full"
      />

      {/* Filtered Articles */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredArticles.map((article) => (
            <Link
              to={`/editorial/${article.id}`}
              key={article.id}
              className="bg-white flex gap-3 shadow p-4 rounded-2xl hover:bg-gray-50 transition-all duration-150 ease-in-out"
            >
              <img
                src={article.photo}
                alt={article.title}
                className="w-64 h-48"
              />
              <div className="w-full flex flex-col justify-between">
                <h2 className="text-xl font-bold">
                  {highlightMatch(article.title, search)}
                </h2>
                <p className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{article.category}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No series found.</p>
      )}
    </div>
  );
}
