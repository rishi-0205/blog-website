import { WorkoutsContext } from "../context/workoutsContexts";
import { useContext } from "react";

export const useWorkoutsContexts = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};
