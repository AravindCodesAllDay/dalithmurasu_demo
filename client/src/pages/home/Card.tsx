import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  alt?: string;
  date: string;
  title: string;
  author: string;
  category: string;
  url: string;
}

export default function Card({
  image,
  alt = "Article image",
  date,
  title,
  author,
  category,
  url,
}: CardProps) {
  return (
    <Link
      to={url}
      className="col-span-3 border rounded-lg overflow-hidden shadow-md bg-white hover:scale-102 transition-all duration-150 ease-in-out"   
      >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <span className="text-sm text-gray-600">{category}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-700">
          <p>By {author}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
