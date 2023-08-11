const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/Page", (req, res) => {
  var a = 1;
  var b = 2;
  var c = b + a + 1;
  res.send(`Hello Page! ${c}`);
});
app.get("/New", (req, res) => {
  res.send("Hello New!");
});
app.get("/TestNode", (req, res) => {
  res.send("Hello TestNode!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});