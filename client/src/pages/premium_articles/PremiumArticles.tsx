// /client/src/pages/premium_articles/PremiumArticles.tsx
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = `${import.meta.env.VITE_API}api/premium-articles`;

export default function PremiumArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setArticles(res.data));
  }, []);

  return (
    <div className="space-y-4">
      {articles.map((article: any) => (
        <div key={article._id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{article.title}</h3>
          <p className="text-sm text-gray-600">
            {article.content?.slice(0, 100)}...
          </p>
          {article.mainImage && (
            <img
              src={`${import.meta.env.VITE_API}uploads/${article.mainImage}`}
              alt=""
              className="w-32 mt-2"
            />
          )}
        </div>
      ))}
    </div>
  );
}
