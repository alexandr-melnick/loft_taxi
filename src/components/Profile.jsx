import React, { useState } from "react";
import { Input } from "./common/Input";
import circle from "../img/circle.png"
import card from "../img/card.png"
import logo_card from "../img/logo_card.png"
import { connect } from "react-redux";
import { authenticate } from "../modules/actions";
import { Submit } from "./common/Submit";
import { saveUserCard } from "../modules/middleWare/fetchs";

const Profile = ({ userCard, token }) => {
  const [cardNumber, setCardNumber] = useState(userCard?.cardNumber);
  const [cardDate, setCardDate] = useState(userCard?.expiryDate);
  const [cardName, setCardName] = useState(userCard?.cardName);
  const [cardCVC, setCardCVC] = useState(userCard?.cvc);

  const saveCard = (e) => {
    e.preventDefault();
    const cardNumber = e.target.number.value;
    const expiryDate = e.target.MMYY.value;
    const cardName = e.target.name.value;
    const  cvc  = e.target.CVC.value;
    saveUserCard({cardNumber, expiryDate, cardName, cvc , token})
  }

  return (
      <>
        <div className="profile" onSubmit={saveCard}>
          <h2>Profile</h2>
          <span className="profile__desc">Enter your payment details</span>
          <form className="card-form">
            <div className="card-wrapper">
              <div className="data-card">
                <Input type="input" size="28" name="name" value={cardName}
                       onChange={e => setCardName(e.target.value)} placeholder="your name"/>
                <Input type="input" size="28" name="number" value={cardNumber}
                       onChange={e => setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000"/>
                <div className="wrap-cvc-date">
                  <div className="wrap-date">
                    <Input type="input" size="28" name="MMYY" value={cardDate}
                           onChange={e => setCardDate(e.target.value)} placeholder="00/00"/>
                  </div>
                  <div className="wrap-cvc">
                    <Input type="input" size="28" name="CVC" value={cardCVC}
                           onChange={e => setCardCVC(e.target.value)} placeholder="000"/>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__header">
                  <img src={logo_card} alt="card logo" className="card__logo"/>
                  <span className="card__date">{cardDate}</span>
                </div>
                <span className="card__number">{cardNumber}</span>
                <img src={card} alt="card" className="chip"/>
                <img src={circle} alt="circle" className="card__circle card__circle--left"/>
                <img src={circle} alt="circle" className="card__circle card__circle--right"/>
              </div>
            </div>
            <Submit type="submit" id="card-submit" value="Save" name="saveCard"></Submit>
          </form>
        </div>
      </>
  )
};

export const WithAuthProfile = connect(
    (state) => ({ userCard: state.auth.userCard, token: state.register.token }),
    dispatch => ({
      authenticate: (email, password) => dispatch(authenticate(email, password))
    }))
(Profile);

