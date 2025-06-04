import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminInterviewCreate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    date: "",
    category: "",
    photo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3030/api/interviews", {
        ...form,
        parts: [], // default empty parts
      });
      navigate("/admin/interview");
    } catch (err) {
      console.error("Failed to create interview", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">➕ Create Interview</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
