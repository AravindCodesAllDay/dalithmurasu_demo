import { Outlet } from "react-router-dom";
import TitleBar from "../components/TitleBar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className=" flex min-h-screen">
      <div className="fixed w-1/5 h-full p-3">
        <Sidebar />
      </div>
      <div className="ml-[20%] flex flex-col w-full gap-3 p-3">
        <TitleBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
