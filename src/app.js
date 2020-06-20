const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const data = require("./data.json");

app.get("", (req, res) => {
  // 'index' questo nome deve combaciare perfettamente con il nome che abbiamo dato al file index.hbs
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});