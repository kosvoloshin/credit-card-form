import React from "react";
import { cardLogo } from "../Utils/utils";

const CardLogo = ({ cardNumber }) => {
    return (
        <div className="card__col logo">
            <img src={cardLogo(cardNumber)} alt="card-logo" />
        </div>
    );
};

export default CardLogo;
