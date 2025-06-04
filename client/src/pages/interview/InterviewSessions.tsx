import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { interviews } from "../../context/interviews";

export default function InterviewSessions() {
  const { interviewId } = useParams();

  const interview = interviews.find((i) => i.id === interviewId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!interview) {
    return <p>No interview found.</p>;
  }

  return (
    <div className="p-6 grid gap-4">
      <h1 className="text-2xl font-bold">{interview.title}</h1>

      {interview.parts.map((part, index) => (
        <Link
          key={index}
          to={part.id}
          className="flex gap-3 items-center bg-white shadow p-4 rounded border border-gray-100 hover:bg-gray-50 transition-all duration-150 ease-in-out"
        >
          <img src={part.photo[0]} alt={part.title} className="w-44 h-32" />
          <div>
            <h2 className="text-xl font-semibold">{part.title}</h2>
            <p>{part.author}</p>
            <p className="text-sm text-gray-400">{part.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
