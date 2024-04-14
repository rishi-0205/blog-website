const express = require("express");

const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//get one workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//post a workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new workout" });
});

//update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE the workout" });
});

module.exports = router;
