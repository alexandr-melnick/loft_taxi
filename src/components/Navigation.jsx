import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavItem, NavExit } from "./common";
import { logOut } from "../modules/actions";

const Navigation = ({ pages, logOut }) => {

  return (
      <nav className="nav">
        <ul className="nav__list">
          <NavItem url={pages.map}/>
          <NavItem url={pages.profile}/>
          <NavExit url={pages.exit} onClick={ () => {logOut(); localStorage.clear();} }/>
        </ul>
      </nav>
  )
}

Navigation.propTypes = {
  pages: PropTypes.shape({
    login: PropTypes.string,
    map: PropTypes.string,
    profile: PropTypes.string,
    exit: PropTypes.string
  }),
  navigateTo: PropTypes.func
}

export const NavigationWithAuth = connect(null, { logOut })(Navigation);
