import React from "react";
import PropTypes from "prop-types";

// Button component.
const Button = ({
  color,
  label,
}) => {
  return (
    <button
      className="button"
      type="button"
      style={{color: `${color}`}}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Color of button. Must be in proper color notation. */
  color: PropTypes.string,

  /** Label for button. Defaults to "Click". */
  label: PropTypes.string,
};

Button.defaultProps = {
  color: "black",
  label: "Click",
};

export default Button;
