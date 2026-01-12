import express from "express";
import { post } from "./data.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
const result = {
    posts: post,
    count: post.length
};
  res.json(result);
});

app.listen(port, () => {
  console.log(`ciao ${port}`);
});
