import React, { useState } from "react";
import { connect } from "react-redux";
import { Select } from "./common/Select";
import { Submit } from "./common/Submit";
import { getPoint } from "../modules/actions";
import { BtnRate } from "./common/BtnRate";


export const BookingForm = ({ addresses, getPoint }) => {
  const [startPoint, setStartPoint] = useState('');
  const [finishPoint, setFinishPoint] = useState('');
  const [activeBtn, setActiveBtn] = useState('');

  const orderTaxi = async (e) => {
    e.preventDefault();
    getPoint(startPoint, finishPoint);
  }

  const clickBtn = type => () => setActiveBtn(type)

  return (
    <>
      <form className="booking__form" onSubmit={orderTaxi}>
        <div className="booking__form-wrap">
          <Select point='From where' options={addresses.filter(item => item !== finishPoint)} onChange={elem => setStartPoint(elem.target.value)} />
          <Select point='Where to' options={addresses.filter(item => item !== startPoint)} onChange={elem => setFinishPoint(elem.target.value)}/>
        </div>
        
        <div className="rate">
          <div className="rate__price-container">
            <BtnRate rate="Standart" price="150 ₽" className="rate__foto-bmv" isActive={activeBtn === "Standart"} onClick={clickBtn('Standart')} />
            <BtnRate rate="Premium" price="250 ₽" className="rate__foto-car" isActive={activeBtn === "Premium"} onClick={clickBtn('Premium')} />
            <BtnRate rate="Business" price="300 ₽" className="rate__foto-mercedes" isActive={activeBtn === "Business"} onClick={clickBtn('Business')} />            
          </div>
          <Submit type="submit" id="order" value="Order" name="Order" disabled={!activeBtn.length}/>
      </div>
      </form>
    </>
  )
}

export const BookingFormConnected = connect(
  (state) => ({
    addresses: state.addressesList.addresses
  }),
  { getPoint })
(BookingForm);
