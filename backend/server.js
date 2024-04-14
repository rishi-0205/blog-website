require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");

//Inititalizing express
const app = express();

app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);
//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
