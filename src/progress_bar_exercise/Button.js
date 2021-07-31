import React from "react";
import PropTypes from "prop-types";

// Button component.
const Button = ({
  color,
  disabled,
  label,
  onClick,
}) => {
  return (
    <button
      className={`button ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      type="button"
      style={{color: `${color}`}}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Color of button. Must be in proper color notation. */
  color: PropTypes.string,

  /** Determines if button is clickable. */
  disabled: PropTypes.bool,

  /** Label for button. Defaults to "Click". */
  label: PropTypes.string,

  /** Function for handling button click. */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "black",
  disabled: false,
  label: "Click",
  onClick: () => {},
};

export default Button;
