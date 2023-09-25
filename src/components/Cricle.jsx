import React from "react";
import PropTypes from "prop-types";
import "./Cricle.css";

const Cricle = ({ variant, label, size, ...props }) => {
  return (
    <div style={{ background: `${variant}`, borderRadius: 100 }} className={`${size}`} {...props}>
      {label}
    </div>
  );
};

export default Cricle;

Cricle.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Cricle.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
