import React from "react";
import PropTypes from "prop-types";

// Button component.
const Button = ({
  color,
  label,
  onClick,
}) => {
  return (
    <button
      className="button"
      onClick={onClick}
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

  /** Function for handling button click. */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "black",
  label: "Click",
  onClick: () => {},
};

export default Button;
