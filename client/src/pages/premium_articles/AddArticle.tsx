import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content || !image1) {
      setError("Title, content, and main image are required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("mainImage", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);

      await axios.post("http://localhost:3030/api/premium-articles", formData);

      navigate("/admin/premium-articles");
    } catch (err: any) {
      setError("Error submitting article. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Premium Article</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium">Content</label>
          <textarea
            className="w-full border rounded p-2 min-h-[200px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium">Image 1 (Required)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage1(e.target.files?.[0] || null)}
            required
          />
        </div>
        <div>
          <label className="block font-medium">Image 2 (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage2(e.target.files?.[0] || null)}
          />
        </div>
        <div>
          <label className="block font-medium">Image 3 (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage3(e.target.files?.[0] || null)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
