import React from "react";
import { setMask } from "../Utils/utils";
import CardLogo from "./CardLogo";
import Chip from "./Chip";

const Card = ({ cardNumber, cardNumberMask, cardHolder, month, year, cvv, isFlip }) => {
    return (
        <div className={`card ${isFlip ? "active" : ""}`}>
            <div className="card__side front">
                <div className="card__row">
                    <Chip />
                    <CardLogo cardNumber={cardNumber} />
                </div>
                <div className="card__row">
                    <div className="card__number">
                        {!cardNumber
                            ? cardNumberMask.split("").map((item, index) => {
                                  return <span key={index}>{item}</span>;
                              })
                            : setMask(cardNumberMask, cardNumber).map((item, index) => {
                                  return <span key={index}>{item}</span>;
                              })}
                    </div>
                </div>
                <div className="card__row">
                    <div className="card__col holder">
                        <div className="card__label">Card Holder</div>
                        <div className="card__result">{!cardHolder ? "Full Name" : cardHolder}</div>
                    </div>
                    <div className="card__col expires">
                        <div className="card__label">Expires</div>
                        <div className="card__result">
                            <span>{!month ? "MM" : month}</span>/<span>{!year ? "YY" : year.slice(2, 4)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card__side back">
                <div className="card__cvv">{!cvv ? "CVV" : cvv.replace(/./g, "*")}</div>
                <CardLogo cardNumber={cardNumber} />
            </div>
        </div>
    );
};

export default Card;
