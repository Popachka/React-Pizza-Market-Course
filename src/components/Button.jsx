import React from "react";
import PropTypes from "prop-types";
import  classNames from "classnames";

const Button = ({ children, className, onClick }) => {
  const classes = classNames("button", className);
  return (
    <button className={classes} onClick={() => onClick()}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  children: null,
  className: "",
  onClick: () => {},
};

export default Button;
