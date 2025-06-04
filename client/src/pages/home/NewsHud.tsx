import NewsLetter from "../../components/NewsLetter";
import Banner from "./Banner";
import Card from "./Card";
import NewsBar from "./NewsBar";
import { poems } from "../../context/poems";
import { useEffect } from "react";
import { periyar_speaks } from "../../context/periyar_speaks";
import { babasaheb_speaks } from "../../context/babasaheb_speaks";
import { Link } from "react-router-dom";

export default function NewsHud() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Banner />
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5 w-2/3">
          <NewsLetter />

          <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-3">
            {periyar_speaks.map((article, index) => (
              <Link key={index} to={`/periyar_speaks/${article.id}`}>
                <Card
                  image={article.photo}
                  title={article.title}
                  date={article.date}
                  author={article.from}
                  category={article.category}
                  url={`/some-url/${article.id}`}
                />
              </Link>
            ))}
            {babasaheb_speaks.map((article, index) => (
              <Link key={index} to={`/babasaheb_speaks/${article.id}`}>
                <Card
                  image={article.photo}
                  title={article.title}
                  date={article.date}
                  author={article.from}
                  category={article.category}
                  url={`/some-url/${article.id}`}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/3 bg-white flex flex-col gap-8 p-3 rounded-lg shadow-md">
          {poems.map((poem, index) => (
            <NewsBar key={index} {...poem} />
          ))}
        </div>
      </div>
    </div>
  );
}
