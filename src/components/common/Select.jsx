import React from "react";

export const Select = ({ options, onChange, point}) => {
  return (
    <select className="select" onChange={onChange}>
      <option value={point}>{point}</option>
      {
        options.map((item) => <option key={item} value={item}>{item}</option>)
      }
    </select>
  )
}