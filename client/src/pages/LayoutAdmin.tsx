import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

export default function LayoutAdmin() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}
