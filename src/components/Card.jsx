import React from "react";

export const Card = () => {
  return (
      <div className="card">
        <div className="card__header">
          <img src="../img/logo_card.png" alt="logo card"/>
          <div className="card__date">00/00</div>
        </div>
        <div className="card__mid">0000 0000 0000 0000</div>
        <div className="card__bottom">
          <img src="../img/card.png" alt="card"/>
          <div>
            <img src="../img/circle.png" alt=""/>
            <img src="../img/circle.png" alt=""/>
          </div>
        </div>
      </div>
  )
}
