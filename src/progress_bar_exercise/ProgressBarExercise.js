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
  const finishInterval = 100;

  // State
  const [percentage, setPercentage] = useState(0);
  const [count, setCount] = useState(0); // Time in seconds.
  const [timer, setTimer] = useState();
  const [finishCount, setFinishCount] = useState(0);
  const [finishTimer, setFinishTimer] = useState();
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Effects

  // Clear timers when component unmounts.
  useEffect(() => {
    return () => {
      if (typeof timer !== "undefined") {
        window.clearInterval(timer);
      }

      if (typeof finishTimer !== "undefined") {
        window.clearInterval(finishTimer);
      }
    }
  }, [timer]);

  // Stop timer when it has ran for 15 seconds.
  useEffect(() => {
    if (count >= 15 && timer) {
      window.clearInterval(timer);
    }
  }, [count])

  // Stop finish request after 1 second.
  useEffect(() => {
    if (finishCount >= 10 && finishTimer) {
      window.clearInterval(finishTimer);
      setPercentage(100);
      setIsStarted(false);
      setTimer(undefined);
      setFinishTimer(undefined);
      setIsFinished(true);
    }
  }, [finishCount])

  /**
   * Initiate fake request.
   * Start animating progress bar. It will reach 90% at 15 seconds.
   * For simplicity, increment progress bar every second at an even rate.
   */
  const handleStartClick = () => {
    if (typeof timer !== "undefined") {
      // We already started a timer, so do not do anything.
      return;
    }

    setIsStarted(true);
    setPercentage(0);

    const timerId = window.setInterval(() => {
      setPercentage((prevPercentage) => {
        return prevPercentage + (90 / 15);
      });
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, interval);

    setTimer(timerId);
  };

  /**
   * Stop the fake request.
   * Animate bar to 100% in 1 second, regardless of its current position.
   * To make animation smooth, we divide interval into 10 chunks of 100 milliseconds.
   */
  const handleFinishClick = () => {
    if (typeof timer !== "undefined") {
      window.clearInterval(timer);

      const remainingPercentage = 100 - percentage;

      const finishTimerId = window.setInterval(() => {
        setPercentage((prevPercentage) => {
          return prevPercentage + (remainingPercentage / 10);
        });
        setFinishCount((prevCount) => {
          return prevCount + 1;
        });
      }, finishInterval);

      setFinishTimer(finishTimerId);
    }
  };

  return (
    <React.Fragment>
      <ProgressBar perc={percentage} isFinished={isFinished} />
      <Button label={isStarted ? "Loading..." : "Start Request"} color="green" onClick={handleStartClick} />
      <Button label="Finish Request" color="red" onClick={handleFinishClick} />
    </React.Fragment>
  );
};
