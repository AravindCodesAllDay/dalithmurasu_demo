import { useEffect, useState } from "react";
import Card from "../home/Card";

type RecentPostType = {
  _id: string;
  title: string;
  content?: string;
  image?: string; // made optional for fallback
  createdAt: string;
  author: string;
  category: string;
};

const SERVER_URL = `${import.meta.env.VITE_API}`;

export default function RecentPosts() {
  const [posts, setPosts] = useState<RecentPostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from backend
  const fetchPosts = () => {
    setLoading(true);
    fetch(`${SERVER_URL}/api/recent-posts`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-5 px-4 md:px-8 lg:px-12">
      {loading && <p className="text-center text-gray-600">Loading posts...</p>}
      {error && (
        <p role="alert" className="text-center text-red-600">
          Error: {error}
        </p>
      )}
      {!loading && !error && posts.length === 0 && (
        <p className="text-center text-gray-500">No recent posts found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 w-full mx-auto gap-6">
        {posts.map((post) => {
          // Build full image URL if it's relative or fallback to placeholder
          const imageUrl =
            post.image && post.image.startsWith("http")
              ? post.image
              : post.image
              ? `${SERVER_URL}/uploads/${post.image}`
              : "https://via.placeholder.com/400x250?text=No+Image";

          return (
            <div key={post._id} className="relative group">
              <Card
                title={post.title}
                image={imageUrl}
                date={new Date(post.createdAt).toLocaleDateString()}
                author={post.author}
                category={post.category}
                url={`/recent_posts/${post._id}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
