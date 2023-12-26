const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.post("/demo", (req, res) => {
  res.send("hello");
});

app.listen(8080, () => {
  console.log("listening on 8080");
});
