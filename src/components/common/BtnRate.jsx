import React from "react";

export const BtnRate = ({ rate, price, className, isActive, onClick }) => {

  const activeClass = 'rate__price rate__price--active';
  const noActiveClass = 'rate__price';
  
  return (
    <button type="button" className={isActive ? activeClass : noActiveClass} onClick={onClick}>
      <h3>{rate}</h3>
      <h5>Price</h5>
      <h2>{price}</h2>
      <div className={className}/>
    </button>
    )
};

