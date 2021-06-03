import React from "react";

export const Submit = ({type, id, name, value, disabled }) => {
  return (
    <button type={type} id={id} name={name} disabled={disabled} readOnly>{value}</button>
  )
}
