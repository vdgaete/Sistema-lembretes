import path from "path";
import express from "express";
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join("..", "dist")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join("..", "dist", "index.html"));
});

// start express server on port 5000
app.listen(process.env.PORT || 5000
    , () => {
  console.log("server started on port 5000");
});