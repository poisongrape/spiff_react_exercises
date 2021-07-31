import React from "react";
import PropTypes from "prop-types";
import ProgressBarFiller from "./ProgressBarFiller";

// Progress bar frame.
const ProgressBar = ({
  isFinished,
  perc,
}) => {
  return (
    <div className={`progress-bar ${isFinished ? "fadeOut" : ""}`}>
      <ProgressBarFiller perc={perc} />
    </div>
  );
};

ProgressBar.propTypes = {
  /** Percentage that progress bar is completed. */
  perc: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
};

export default ProgressBar;
