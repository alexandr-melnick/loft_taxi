import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import circle from "../img/circle.png"
import card from "../img/card.png"
import logo_card from "../img/logo_card.png"
import { Input } from "./common/Input";
import { authenticate } from "../modules/actions";
import { Submit } from "./common/Submit";
import { saveUserCard, getUserCard } from "../modules/api/fetchs";
import { setUserCard } from "../modules/actions"

const Profile = ({ userCard, token }) => {
  const [cardNumber, setCardNumber] = useState(userCard?.cardNumber);
  const [expiryDate, setCardDate] = useState(userCard?.expiryDate);
  const [cardName, setCardName] = useState(userCard?.cardName);
  const [cardCVC, setCardCVC] = useState(userCard?.cvc);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCardNumber(userCard.cardNumber);
    setCardDate(userCard.expiryDate);
    setCardName(userCard.cardName);
    setCardCVC(userCard.cvc);
  }, [userCard]);


  const saveCard = async (e) => {
    e.preventDefault();
    setError(null);
    const cardNumber = e.target.number.value;
    const expiryDate = e.target.MMYY.value;
    const cardName = e.target.name.value;
    const  cvc  = e.target.CVC.value;
    const result = await saveUserCard({ cardNumber, expiryDate, cardName, cvc, token });
    if (!result.success) setError(result.error)  
    const userCard = getUserCard(token);
    setUserCard(userCard);
    // добавить условия редиректа
    window.location.href = '/map'
  }

  return (
      <>
        <div className="profile" onSubmit={saveCard}>
        <h2>Profile</h2>
          <span className="profile__desc">Enter your payment details</span>
          {error && <span>{error}</span>}
          <form className="card-form">
            <div className="card-wrapper">
            <div className="data-card">
              <Input type="text" size="28" name="name" value={cardName} onChange={e => setCardName(e.target.value)} placeholder="your name" maxLength="25" />
              <Input mask="9999 9999 9999 9999" type="text" size="28" name="number" value={cardNumber} onChange={e => setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000" maxLength="19" />
              
                <div className="wrap-cvc-date">
                  <div className="wrap-date">
                    <Input mask="19/29" formatChars={{"1": "[0-1]", "2": "[2-9]", "9": "[0-9]"}} type="text" size="28" name="MMYY" value={expiryDate} onChange={e => setCardDate(e.target.value)} placeholder="00/00" maxLength="5"/>
                  </div>
                  <div className="wrap-cvc">
                    <Input mask="999" type="text" size="28" name="CVC" value={cardCVC} onChange={e => setCardCVC(e.target.value)} placeholder="000" maxLength="3" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__header">
                  <img src={logo_card} alt="card logo" className="card__logo"/>
                  <span className="card__date">{expiryDate}</span>
                </div>
                <span className="card__number">{cardNumber}</span>
                <img src={card} alt="card" className="chip"/>
                <img src={circle} alt="circle" className="card__circle card__circle--left"/>
                <img src={circle} alt="circle" className="card__circle card__circle--right"/>
              </div>
            </div>
            <Submit type="submit" id="card-submit" value="Save" name="saveCard"/>
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
