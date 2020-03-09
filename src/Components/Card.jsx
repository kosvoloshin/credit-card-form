import React from "react";
import visa from "../Assets/images/visa.png";

const Card = ({ cardNumber, cardHolder, month, year, cvv, isFlip }) => {
    return (
        <div className={`card ${isFlip ? "active" : ""}`}>
            <div className="card__side front">
                <div className="card__row">
                    <div className="card__col chip">
                        <span className="hor" />
                        <span className="hor" />
                        <span className="hor" />
                        <span className="ver" />
                    </div>
                    <div className="card__col logo">
                        <img src={visa} alt="card-logo" />
                    </div>
                </div>
                <div className="card__row">
                    <div className="card__number">{cardNumber}</div>
                </div>
                <div className="card__row">
                    <div className="card__col holder">
                        <div className="card__label">Card Holder</div>
                        <div className="card__result">{cardHolder}</div>
                    </div>
                    <div className="card__col expires">
                        <div className="card__label">Card Holder</div>
                        <div className="card__result">
                            <span>{month}</span>/<span>{year}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card__side back">
                back side
                <div>{cvv}</div>
            </div>
        </div>
    );
};

export default Card;
