import React from "react";
import Exercise from "../exercise/Exercise";
import ProgressBar from "./ProgressBar";
import Button from "./Button";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  return (
    <React.Fragment>
      <ProgressBar />
      <Button label="Start Request" color="green" />
      <Button label="Finish Request" color="red" />
    </React.Fragment>
  );
};
