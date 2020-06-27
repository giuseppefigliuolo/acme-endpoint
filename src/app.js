const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const data = require("./data.json");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
