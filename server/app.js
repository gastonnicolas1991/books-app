var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.json({ message: "¡Hello World!" });
});

app.listen(port);
console.log("API listening on port " + port);
