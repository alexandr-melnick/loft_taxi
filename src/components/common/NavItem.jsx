import React from "react";
import {ucFirst} from "../../utils/caseFirst";

export const NavItem = ({url, onClick}) => {

  return (
      <li className="nav__item">
        <div className="nav__btn" onClick={ () => onClick(url) }>{ucFirst(url)}</div>
      </li>
  )
}
