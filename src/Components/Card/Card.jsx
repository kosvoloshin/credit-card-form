import React from "react";
import PropTypes from "prop-types";
import { setMask } from "../../Utils/utils";
import CardSide from "./CardSide";
import CardRow from "./CardRow";
import CardCol from "./CardCol";
import CardLogo from "./CardLogo";
import Chip from "./Chip";

const propTypes = {
    handlerFlip: PropTypes.func.isRequired,
    cardNumber: PropTypes.string.isRequired,
    cardNumberMask: PropTypes.string.isRequired,
    cardHolder: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
    bgPath: PropTypes.string.isRequired,
};

const Card = ({ cardNumber, cardNumberMask, cardHolder, month, year, cvv, isFlip, bgPath }) => {
    return (
        <div className={`card ${isFlip ? "active" : ""}`}>
            <CardSide className="front" bgPath={bgPath}>
                <CardRow>
                    <Chip />
                    <CardLogo cardNumber={cardNumber} />
                </CardRow>

                <CardRow>
                    <div className="card__number">
                        {(!cardNumber ? cardNumberMask.split("") : setMask(cardNumberMask, cardNumber)).map(
                            (item, index) => {
                                return <span key={index}>{item}</span>;
                            },
                        )}
                    </div>
                </CardRow>

                <CardRow>
                    <CardCol className="holder" label="Card Holder">
                        <div className="card__result" title={cardHolder}>
                            {!cardHolder ? "Full Name" : cardHolder}
                        </div>
                    </CardCol>

                    <CardCol className="expires" label="Expires">
                        <div className="card__result">
                            <span>{!month ? "MM" : month}</span>/<span>{!year ? "YY" : year.slice(2, 4)}</span>
                        </div>
                    </CardCol>
                </CardRow>
            </CardSide>

            <CardSide className="back" bgPath={bgPath}>
                <div className="card__cvv">{!cvv ? "CVV" : cvv.replace(/./g, "*")}</div>
                <CardLogo cardNumber={cardNumber} />
            </CardSide>
        </div>
    );
};

Card.propTypes = propTypes;

export default Card;
