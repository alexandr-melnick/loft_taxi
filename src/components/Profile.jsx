import React from "react";
import { Input } from "./common/Input";
import circle from "../img/circle.png"
import card from "../img/card.png"
import logo_card from "../img/logo_card.png"
import { connect } from "react-redux";
import { authenticate } from "../modules/actions";

const Profile = ({ userCard }) => {
  console.log(userCard);
  return (
      <div className="profile">
        <h2>Profile</h2>
        <span className="profile__desc">Enter your payment details</span>
        <div className="data-card">
          <Input type="input" size="28" name="Name" placeholder="your name"/>
          <Input type="input" size="28" name="Card number" placeholder="0000 0000 0000 0000"/>
          <Input type="input" size="28" name="MM/YY" placeholder="00/00"/>
          <Input type="input" size="28" name="CVC" placeholder="000"/>
        </div>
        <div className="card">
          <div className="card__logo">
            <img src={logo_card} alt="card logo"/>
            <span className="card__date">{}</span>
          </div>
          <span className="card__number">{}</span>

        </div>
      </div>
  )
};

export const WithAuthProfile = connect(
    (state) => ({ userCard: state.auth.userCard }),
    dispatch => ({
      authenticate: (email, password) => dispatch(authenticate(email, password))
    }))
(Profile);

