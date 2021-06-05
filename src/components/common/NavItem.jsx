import React from "react";
import { Link } from "react-router-dom";
import { ucFirst } from "../../utils/caseFirst";

export const NavItem = ({ url }) => {
  return (
      <li className="nav__item">
        <Link className="nav__btn" to={`/${url}`}>{ucFirst(url)}</Link>
      </li>
  )
}
