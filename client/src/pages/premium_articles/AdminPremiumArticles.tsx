import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3030/api/premium-articles";

export default function AdminPremiumArticles() {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  const fetchArticles = async () => {
    const res = await axios.get(API_URL);
    setArticles(res.data);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    await axios.delete(`${API_URL}/${id}`);
    fetchArticles();
  };

  const handleEdit = (article: any) => {
    setEditingArticle(article);
    setShowForm(true);
  };

  const handleSuccess = () => {
    setShowForm(false);
    setEditingArticle(null);
    fetchArticles();
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="space-y-4">
      {articles.map((article: any) => (
        <div key={article._id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{article.title}</h3>
          <p className="text-sm text-gray-600">{article.content?.slice(0, 100)}...</p>
          {article.mainImage && (
            <img
              src={`http://localhost:3030/uploads/${article.mainImage}`}
              alt=""
              className="w-32 mt-2"
            />
          )}
          <div className="flex gap-4 mt-2">
            <button onClick={() => handleEdit(article)} className="text-blue-600">Edit</button>
            <button onClick={() => handleDelete(article._id)} className="text-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
