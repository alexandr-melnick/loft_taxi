import React, { useRef } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { ucFirst } from "../../utils/caseFirst";

export const Input = ({ type, name, size, placeholder, error, value, maxLength, mask, formatChars, register }) => {
  const inputRef = useRef(null);
  const { ref, ...rest } = register(name, { value });
  if (mask) {
    return (
      <>
        <label htmlFor={name}>{ucFirst(name)}:</label>
        <InputMask
          {...rest}
          ref={(e) => {
            ref(e)
            inputRef.current = e
          }}
          mask={mask}
          maskChar=" "
          id={name}
          formatChars={formatChars}
          placeholder={placeholder}
          value={value}
          className={!error ? "input" : "input-error input"}
        />
      </>
    )
  }
  return (
    <>
      <label htmlFor={name}>{ucFirst(name)}:</label>
      <input
        {...rest}
        ref={(e) => {
          ref(e)
          inputRef.current = e
        }}
        type={type}
        id={name}
        name={name}
        size={size}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        className={!error ? "input" : "input-error input"}
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
