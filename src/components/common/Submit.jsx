import React from "react";

export const Submit = ({type, id, name, value }) => {
  return (
      <input type={type}
             id={id}
             name={name}
             value={value}
             readOnly
      />
  )
}
