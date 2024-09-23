import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";

const feedURL = "https://rss.app/feeds/jqf4XkEIv7oXPVjI.xml";
const parser = new RSSParser();
let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articles.push({ item });
  });
};

parse(feedURL);

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(articles);
});

const server = app.listen("5000", () => {
  console.log("App is listenin at http://localhost:5000");
});

export default server;
