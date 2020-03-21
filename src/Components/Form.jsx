import React from "react";
import FormRow from "./FormRow";
import FormBlock from "./FormBlock";
import { genereteMonths, generateYears } from "../Utils/utils";

const Form = ({
    handlerSubmit,
    handlerChangeCardNumber,
    handlerChangeValue,
    handlerChangeCvv,
    handlerFlip,
    cardNumber,
    cardHolder,
    month,
    year,
    cvv,
}) => {
    return (
        <form onSubmit={handlerSubmit} className="form">
            <FormRow>
                <FormBlock>
                    <input
                        className="form__input"
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={handlerChangeCardNumber}
                    />
                </FormBlock>
            </FormRow>

            <FormRow>
                <FormBlock>
                    <input
                        className="form__input"
                        type="text"
                        name="cardHolder"
                        placeholder="Card Holder"
                        value={cardHolder}
                        onChange={handlerChangeValue}
                    />
                </FormBlock>
            </FormRow>

            <FormRow>
                <FormBlock>
                    <select
                        className="form__input form__input--select"
                        name="month"
                        placeholder="Month"
                        value={month}
                        onChange={handlerChangeValue}
                    >
                        <option disabled value="">
                            Month
                        </option>
                        {genereteMonths().map(value => {
                            return (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            );
                        })}
                    </select>
                </FormBlock>

                <FormBlock>
                    <select
                        className="form__input form__input--select"
                        name="year"
                        placeholder="Year"
                        value={year}
                        onChange={handlerChangeValue}
                    >
                        <option disabled value="">
                            Year
                        </option>
                        {generateYears().map(year => {
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </FormBlock>

                <FormBlock>
                    <input
                        className="form__input"
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={cvv}
                        onChange={handlerChangeCvv}
                        onFocus={handlerFlip}
                        onBlur={handlerFlip}
                    />
                </FormBlock>
            </FormRow>

            <FormRow>
                <button className="form__submit" type="submit">
                    Submit
                </button>
            </FormRow>
        </form>
    );
};

export default Form;
