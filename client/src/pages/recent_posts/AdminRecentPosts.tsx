import { useEffect, useState } from "react";

interface Post {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  author: string;
  category: string;
}

export default function AdminRecentPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");         // NEW
  const [category, setCategory] = useState("");     // NEW
  const [imageFile, setImageFile] = useState<File | null>(null);

  const SERVER_URL = "http://localhost:3030";

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(`${SERVER_URL}/api/recent-posts`);
    const data = await res.json();
    setPosts(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);           // NEW
    formData.append("category", category);       // NEW
    if (imageFile) {
      formData.append("image", imageFile);
    }

    const res = await fetch(`${SERVER_URL}/api/recent-posts`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setTitle("");
      setContent("");
      setAuthor("");       // Clear
      setCategory("");     // Clear
      setImageFile(null);
      fetchPosts();
    }
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`${SERVER_URL}/api/recent-posts/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchPosts();
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Manage Recent Posts
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 mb-10 max-w-xl mx-auto"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="mt-1 block w-full text-sm text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Add Post
        </button>
      </form>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const imageUrl = post.image
            ? post.image.startsWith("http")
              ? post.image
              : `${SERVER_URL}/uploads/${post.image}`
            : "https://via.placeholder.com/400x250?text=No+Image";

          return (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col"
            >
              <img
                src={imageUrl}
                alt={post.title}
                className="rounded-md h-48 object-cover mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-500 text-sm">By {post.author} in {post.category}</p>
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">{post.content}</p>
              <button
                onClick={() => handleDelete(post._id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm self-start"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
