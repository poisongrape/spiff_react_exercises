import React from "react";
import PropTypes from "prop-types";

// Button component.
const Button = ({label}) => {
  return (
    <button
      className="button"
      type="button"
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Label for button. Defaults to "Click". */
  label: PropTypes.string,
};

Button.defaultProps = {
  label: "Click",
};

export default Button;
