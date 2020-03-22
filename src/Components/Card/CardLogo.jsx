import React from "react";
import PropTypes from "prop-types";
import { cardLogo } from "../../Utils/utils";

const propTypes = {
    cardNumber: PropTypes.string.isRequired,
};

const CardLogo = ({ cardNumber }) => {
    return (
        <div className="card__col logo">
            <img src={cardLogo(cardNumber)} alt="card-logo" />
        </div>
    );
};

CardLogo.propTypes = propTypes;

export default CardLogo;
