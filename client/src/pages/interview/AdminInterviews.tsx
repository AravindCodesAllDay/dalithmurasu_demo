import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Interview = {
  _id: string;
  title: string;
  date: string;
  category: string;
  photo: string;
  parts: any[]; // You can define a proper type for parts later if needed
};

export default function AdminInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}api/interviews`).then((res) => {
      setInterviews(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎤 All Interviews</h1>
      <Link
        to="/admin/interviews/create"
        className="inline-block mb-4 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        ➕ Add Interview
      </Link>
      <div className="grid grid-cols-1 gap-4">
        {interviews.map((interview) => (
          <div
            key={interview._id}
            className="p-4 border border-gray-300 rounded bg-white"
          >
            <h2 className="text-xl font-semibold">{interview.title}</h2>
            <p className="text-sm text-gray-500">{interview.date}</p>
            <p className="text-gray-700">{interview.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
