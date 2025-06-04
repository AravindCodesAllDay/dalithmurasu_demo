import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { interviews } from "../../context/interviews";

export default function InterviewSession() {
  const { interviewId, partId } = useParams();

  const article = interviews.find((a) => a.id === interviewId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [partId]);

  if (!article) return <div className="p-6">Interview not found</div>;

  const part = article.parts.find((b) => b.id === partId);

  if (!part) return <div className="p-6">Part not found</div>;

  const partIndex = article.parts.findIndex((b) => b.id === partId);

  const prevPart = article.parts[partIndex - 1];
  const nextPart = article.parts[partIndex + 1];

  return (
    <div className="bg-white rounded-lg p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">{part.title}</h1>
      <p className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{part.date}</span>
        <span>{article.category}</span>
      </p>
      <div className="flex flex-wrap gap-3 mx-auto">
        {part.photo?.length > 0 &&
          part.photo.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={part.title}
              className="my-4 mx-auto h-80 rounded object-cover"
            />
          ))}
      </div>

      {part.content.map((section, idx) => (
        <div key={idx} className="my-6">
          <h2 className="text-xl font-semibold">{section.header}</h2>
          <p className="mt-2 text-gray-800 whitespace-pre-line">
            {section.passage}
          </p>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6 border-t mt-8">
        {prevPart ? (
          <Link
            to={`/interviews/${interviewId}/${prevPart.id}`}
            className="px-4 py-2 border border-highlight-1 hover:bg-highlight-1 hover:text-white rounded transition-all duration-150 ease-in-out"
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}
        {nextPart ? (
          <Link
            to={`/interviews/${interviewId}/${nextPart.id}`}
            className="px-4 py-2 border border-highlight-1 hover:bg-highlight-1 hover:text-white rounded transition-all duration-150 ease-in-out"
          >
            Next →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
