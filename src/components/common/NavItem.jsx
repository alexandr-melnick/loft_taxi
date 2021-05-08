import React from "react";

export const NavItem = ({url, onClick}) => {

  const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);

  return (
      <li className="nav__item">
        <div className="nav__btn" onClick={ () => onClick(url) }>{ucFirst(url)}</div>
      </li>
  )
}
