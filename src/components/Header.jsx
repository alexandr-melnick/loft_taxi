import React from "react";
import logo from "../img/logo.png";
import {NavigationWithAuth} from "./Navigation";
import PropTypes from "prop-types";

export const Header = ({pagesUrls, navigateTo}) => {
  return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Loft Taxi"/>
        </div>
        <NavigationWithAuth pages={pagesUrls} navigateTo={navigateTo}/>
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
