import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  date: string;
  title: string;
  author: string;
  category: string;
  url: string;
}

export default function Card_2({
  image,
  date,
  title,
  author,
  category,
  url,
}: CardProps) {
  return (
    <Link
      to={url}
      className="col-span-2 border rounded-lg overflow-hidden shadow-md bg-white  hover:scale-102 transition-all duration-150 ease-in-out"
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-600">Category: {category}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-700">By {author}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
}
