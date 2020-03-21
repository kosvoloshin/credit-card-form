import React, { Component } from "react";
import Card from "../Components/Card";
import Form from "../Components/Form";

class App extends Component {
    state = {
        cardNumber: "",
        cardNumberMask: "#### #### #### ####",
        cardHolder: "",
        month: "",
        year: "",
        cvv: "",
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

    handlerChangeCardNumber = ({ target }) => {
        if (/(^[0-9]{1,16}$)|(^\s{0}$)/g.test(target.value)) {
            this.setState({
                [target.name]: target.value,
            });
        }
    };

    handlerChangeCvv = ({ target }) => {
        if (/(^[0-9]{1,3}$)|(^\s{0}$)/g.test(target.value)) {
            this.setState({
                [target.name]: target.value,
            });
        }
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
                <div className="content">
                    <Card
                        cardNumber={cardNumber}
                        cardNumberMask={cardNumberMask}
                        cardHolder={cardHolder}
                        month={month}
                        year={year}
                        cvv={cvv}
                        isFlip={isFlip}
                    />
                    <Form
                        handlerSubmit={this.handlerSubmit}
                        handlerChangeValue={this.handlerChangeValue}
                        handlerChangeCardNumber={this.handlerChangeCardNumber}
                        handlerChangeCvv={this.handlerChangeCvv}
                        handlerFlip={this.handlerFlip}
                        cardNumber={cardNumber}
                        cardNumberMask={cardNumberMask}
                        cardHolder={cardHolder}
                        month={month}
                        year={year}
                        cvv={cvv}
                    />
                </div>
            </div>
        );
    }
}

export default App;
