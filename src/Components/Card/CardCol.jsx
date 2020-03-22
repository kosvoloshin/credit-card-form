import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
};

const defaultProps = {
    className: "",
    label: "",
};

const CardCol = ({ className, label, children }) => {
    return (
        <div className={`card__col ${className}`}>
            <div className="card__label">{label}</div>
            {children}
        </div>
    );
};

CardCol.propTypes = propTypes;
CardCol.defaultProps = defaultProps;

export default CardCol;
