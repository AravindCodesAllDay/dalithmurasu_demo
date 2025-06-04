import { Link } from "react-router-dom";

interface CardProps {
  date: string;
  title: string;
  author: string;
  id: string;
  photo: string;
  category: string;
}

export default function NewsBar({
  date,
  title,
  id,
  author,
  photo,
  category,
}: CardProps) {
  return (
    <Link
      to={`poem/${id}`}
      className="flex gap-2 w-full hover:shadow-md transition-all duration-150 ease-in-out"
    >
      <img src={photo} alt={title} className="w-24 h-32" />
      <div className="p-3 flex flex-col gap-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{author}</p>
        <p className="text-xs text-gray-600">
          <span>{category}</span> | <span>{date}</span>
        </p>
      </div>
    </Link>
  );
}
