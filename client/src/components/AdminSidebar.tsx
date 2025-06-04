import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">🛠 Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link
          to="/admin/recent-posts"
          className="hover:text-yellow-300 transition duration-200"
        >
          📄 Manage Recent Posts
        </Link>

        <div>
          <Link
            to="/admin/premium-articles"
            className="hover:text-yellow-300 transition duration-200"
          >
            💎 Manage Premium Articles
          </Link>
          <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
            <Link
              to="/admin/premium-articles"
              className="hover:text-yellow-300 transition duration-200"
            >
              • View All
            </Link>
            <Link
              to="/admin/premium-articles/create"
              className="hover:text-yellow-300 transition duration-200"
            >
              • Add New
            </Link>
          </div>
        </div>

        {/* New Interviews Section */}
        <div>
          <Link
            to="/admin/interview"
            className="hover:text-yellow-300 transition duration-200"
          >
            🎤 Manage Interviews
          </Link>
          <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
            <Link
              to="/admin/interview"
              className="hover:text-yellow-300 transition duration-200"
            >
              • View All
            </Link>
            <Link
              to="/admin/interview/create"
              className="hover:text-yellow-300 transition duration-200"
            >
              • Add New
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}
