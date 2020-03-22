import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    className: PropTypes.string,
    bgPath: PropTypes.string.isRequired,
};

const defaultProps = {
    className: "",
};

const CardSide = ({ className, bgPath, children }) => {
    return (
        <div className={`card__side ${className}`} style={{ backgroundImage: `url("${bgPath}")` }}>
            {children}
        </div>
    );
};

CardSide.propTypes = propTypes;
CardSide.defaultProps = defaultProps;

export default CardSide;
