import { useState } from "react";
import { useWorkoutsContexts } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContexts();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("new workout added");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label>Exercise Title:</label>
        <input
          type="text"
          className={emptyFields.includes("title") ? "error" : ""}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Exercise Load:</label>
        <input
          type="number"
          className={emptyFields.includes("load") ? "error" : ""}
          onChange={(e) => setLoad(e.target.value)}
        />
        <label>Exercise Reps:</label>
        <input
          type="number"
          className={emptyFields.includes("reps") ? "error" : ""}
          onChange={(e) => setReps(e.target.value)}
        />
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default WorkoutForm;
