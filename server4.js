const express = require("express");
const postRouter = require("./routes/post.route");

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to my server, Please use /user to get all users");
});

app.use("/post", postRouter);

app.listen(4000, (err) => {
  console.log("Listening on port: " + 4000);
});
