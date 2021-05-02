import React from "react";

export const NavItem = ({url, onClick}) => {
  return (
      <li className="nav__item">
        <div className="nav__btn" onClick={ () => onClick(url) }>{url}</div>
      </li>
  )
}
