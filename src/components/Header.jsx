import React from "react";
import PropTypes from "prop-types";
import logo from "../img/logo.png";
import { NavigationWithAuth } from "./Navigation";

export const Header = ({ pagesUrls }) => {
  return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Loft Taxi"/>
        </div>
        <NavigationWithAuth pages={pagesUrls} />
      </header>
  )
}

Header.propTypes = {
  pagesUrls: PropTypes.shape({
    login: PropTypes.string,
    map: PropTypes.string,
    profile: PropTypes.string,
    exit: PropTypes.string
  }),
  navigateTo: PropTypes.func
}
