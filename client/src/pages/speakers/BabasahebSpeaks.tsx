import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { babasaheb_speaks } from "../../context/babasaheb_speaks";

export default function BabasahebSpeaks() {
  const [search, setSearch] = useState("");

  if (!babasaheb_speaks) {
    return <p>No context to view</p>;
  }

  const filteredArticles = babasaheb_speaks.filter((article) =>
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
        filteredArticles.map((article) => (
          <Link
            to={`/babasaheb_speaks/${article.id}`}
            key={article.id}
            className="bg-white flex gap-3 shadow p-3 rounded hover:bg-gray-50 transition-all duration-150 ease-in-out"
          >
            <img
              src={article.photo}
              alt={article.title}
              className="w-24 h-32"
            />
            <div className="w-full flex flex-col justify-between">
              <h2 className="text-xl font-bold">
                {highlightMatch(article.title, search)}
              </h2>
              <p className="flex justify-between text-sm text-gray-500">
                <span>{article.date}</span>
                <span>{article.category}</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500">No articles found.</p>
      )}
    </div>
  );
}
