import React, { Component } from "react";
import { months, years } from "../Utils/utils";
import Card from "../Components/Card";

class App extends Component {
    state = {
        cardNumber: "",
        cardNumberMask: "#### #### #### ####",
        cardHolder: "Konstantin Voloshyn",
        month: "09",
        year: "24",
        cvv: "***",
        isFlip: false,
    };

    handlerSubmit = e => {
        e.preventDefault();
    };

    handlerChangeValue = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        });
    };

    handlerFlip = () => {
        this.setState({
            isFlip: !this.state.isFlip,
        });
    };

    render() {
        const { cardNumber, cardNumberMask, cardHolder, month, year, cvv, isFlip } = this.state;

        return (
            <div className="wrapper">
                <Card
                    cardNumber={cardNumber}
                    cardNumberMask={cardNumberMask}
                    cardHolder={cardHolder}
                    month={month}
                    year={year}
                    cvv={cvv}
                    isFlip={isFlip}
                />
                <form onSubmit={this.handlerSubmit}>
                    <label>
                        <div>Card Number</div>
                        <input type="text" name="cardNumber" value={cardNumber} onChange={this.handlerChangeValue} />
                    </label>
                    <label>
                        <div>Card Holder</div>
                        <input type="text" name="cardHolder" value={cardHolder} onChange={this.handlerChangeValue} />
                    </label>
                    <label>
                        <div>Expiration Date</div>
                        <select name="month" value={month} onChange={this.handlerChangeValue}>
                            {months.map(({ value, label }) => {
                                return (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                );
                            })}
                        </select>
                    </label>
                    <label>
                        <select name="year" value={year} onChange={this.handlerChangeValue}>
                            {years.map(({ year }) => {
                                return (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                );
                            })}
                        </select>
                    </label>
                    <label>
                        <div>CVV</div>
                        <input
                            type="text"
                            name="cvv"
                            value={cvv}
                            onChange={this.handlerChangeValue}
                            onFocus={this.handlerFlip}
                            onBlur={this.handlerFlip}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default App;
