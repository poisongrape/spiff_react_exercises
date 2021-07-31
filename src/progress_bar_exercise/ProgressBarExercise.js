import React, { useEffect, useState } from "react";
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
  // Variables
  const interval = 1000;

  // State
  const [percentage, setPercentage] = useState(0);
  const [count, setCount] = useState(0); // Time in seconds.
  const [timer, setTimer] = useState();

  // Effects

  // Clear timer when component unmounts.
  useEffect(() => {
    return () => {
      if (typeof timer !== "undefined") {
        window.clearInterval(timer);
      }
    }
  }, [timer]);

  // Stop timer when it has ran for 15 seconds.
  useEffect(() => {
    if (count >= 15) {
      if (timer) {
        window.clearInterval(timer);
      }
    }
  }, [count])

  /**
   * Initiate fake request.
   * Start animating progress bar. It will reach 90% at 15 seconds.
   * For simplicity, increment progress bar every second at an even rate.
   */
  const handleStartClick = () => {
    if (timer) {
      // We already started a timer, so do not do anything.
      return;
    }

    const timerId = setInterval(() => {
      setPercentage((prevPercentage) => {
        return prevPercentage + (90 / 15);
      });
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, interval);

    setTimer(timerId);
  };

  return (
    <React.Fragment>
      <ProgressBar perc={percentage} />
      <Button label="Start Request" color="green" onClick={handleStartClick} />
      <Button label="Finish Request" color="red" />
    </React.Fragment>
  );
};
