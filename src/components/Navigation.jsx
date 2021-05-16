import React, {useContext} from "react";
import {NavItem, NavExit} from "./common";
import PropTypes from "prop-types";
import {AuthContext, withAuth} from "../AuthContext";

const Navigation = ({pages}) => {

  const { logOut } =useContext(AuthContext);

    return (
        <nav className="nav">
          <ul className="nav__list">
            <NavItem url={pages.map} />
            <NavItem url={pages.profile} />
            <NavExit url={pages.exit} onClick={ logOut } />
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

export const NavigationWithAuth = withAuth(Navigation);
