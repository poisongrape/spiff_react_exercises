import React from "react";
import PropTypes from "prop-types";

// Filler content for progress bar.
const ProgressBarFiller = ({
  perc,
}) => {
  const percentageStr = perc + "%";

  return (
    <div
      className="filler"
      style={{ width: `${percentageStr}`}}
    />
  );
};

ProgressBarFiller.propTypes = {
  /** Percentage that progress bar is completed. */
  perc: PropTypes.number.isRequired,
};

ProgressBarFiller.defaultProps = {
};

export default ProgressBarFiller;
