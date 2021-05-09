import React from "react";
import PropTypes from "prop-types";
import { ucFirst } from "../../utils/caseFirst";

export const Input = ({ type, name, size, placeholder, error, setFunc }) => {

  return (
      <>
        <label htmlFor={name}>{ucFirst(name)}:</label>
        <input
            type={type}
            id={name}
            name={name}
            size={size}
            placeholder={placeholder}
            className={!error ? "input" : "input-error input"}
            onChange={() => setFunc(false)}
        />
      </>
  );
}

Input.propsTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  setFunc: PropTypes.func
}
