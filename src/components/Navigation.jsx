import React from "react";
import {NavItem} from "./common/NavItem";

export const Navigation = ({pages, navigateTo}) => {

    return (
        <nav className="nav">
          <ul className="nav__list">
            <NavItem url={pages.map} onClick={ navigateTo } />
            <NavItem url={pages.login} onClick={ navigateTo } />
            <NavItem url={pages.profile} onClick={ navigateTo } />
            <NavItem url={pages.exit} onClick={ navigateTo } />
          </ul>
        </nav>
    )
}
