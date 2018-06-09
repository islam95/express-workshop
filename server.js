const express = require("express");
const formidable = require("express-formidable");
const fs = require("fs");

fs.readFile(__dirname + "/data/posts.json", function(error, file) {
  const parsedFile = JSON.parse(file);
  //console.log(file.toString());
});

const app = express();

app.use(express.static("public"));

app.use(formidable());

app.post("/create-post", (req, res) => {
  console.log(req.fields);
});

app.get("/get-posts", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
