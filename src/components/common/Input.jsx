import React from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { ucFirst } from "../../utils/caseFirst";

export const Input = ({ type, name, size, placeholder, error, setFunc, onChange, value, maxLength, mask, formatChars}) => {
  if (mask) {
    return (
      <>
        <label htmlFor={name}>{ucFirst(name)}:</label>
        <InputMask
          mask={mask}
          maskChar=" "
          id={name}
          formatChars={formatChars}
          placeholder={placeholder}
          value={value}
          onChange={onChange ? onChange : () => setFunc(false)}
          className={!error ? "input" : "input-error input"}
        />
      </>
    )
  }
  return (
    <>
      <label htmlFor={name}>{ucFirst(name)}:</label>
      <input
        type={type}
        id={name}
        name={name}
        size={size}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        className={!error ? "input" : "input-error input"}
        onChange={onChange ? onChange : () => setFunc(false)}
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
