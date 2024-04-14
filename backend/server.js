const express = require("express");

//Inititalizing express
const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

//listen for requests
app.listen(3000, () => {
  console.log("listening on port 3000");
});
