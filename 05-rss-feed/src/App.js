import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./Feed";
function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  console.log(articles);

  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-5"> 05-RSS FEED</h1>
      <h2 className="text-3xl font-semibold text-center mt-2 mb-4">
        Good Morning
      </h2>
      <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
        <div className="bg-black flex flex flex-col items-center rounded-lg py-2 px-6 mb-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Google_News.png?20211029151451"
            alt="News RSS Feed"
          />
        </div>

        {articles.map((item, i) => (
          <Feed
            key={i}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
          />
        ))}
      </div>
    </>
  );
}

export default App;
