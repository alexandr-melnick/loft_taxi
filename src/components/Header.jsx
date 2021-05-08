import React from "react";
import logo from "../img/logo.png";
import {Navigation} from "./Navigation";

const Header = ({pagesUrls, navigateTo}) => {
  return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Loft Taxi"/>
        </div>
        <Navigation pages={pagesUrls} navigateTo={navigateTo}/>
      </header>
  )
}

export default Header;
