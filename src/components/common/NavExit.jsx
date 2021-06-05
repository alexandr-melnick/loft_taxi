import React from "react";
import {ucFirst} from "../../utils/caseFirst";

export const NavExit = ({onClick, url}) => {
    return  (
    <li className="nav__item">
        <div className="nav__btn" onClick={ onClick }>{ucFirst(url)}</div>
    </li>
    )
};

