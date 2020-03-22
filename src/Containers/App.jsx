import React, { Component } from "react";
import Card from "../Components/Card/Card";
import Form from "../Components/Form/Form";
import { generateRandomImage } from "../Utils/utils";

class App extends Component {
    state = {
        cardNumber: "",
        cardNumberMask: "#### #### #### ####",
        cardHolder: "",
        month: "",
        year: "",
        cvv: "",
        isFlip: false,
        bgPath: "",
    };

    componentDidMount() {
        this.setState({
            bgPath: generateRandomImage(1, 12),
        });
    }

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
        const { cardNumber, cardNumberMask, cardHolder, month, year, cvv, isFlip, bgPath } = this.state;

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
                        bgPath={bgPath}
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
