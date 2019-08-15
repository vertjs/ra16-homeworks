import React, { Component } from 'react'

export default class CurrencyConverter extends Component {
    state = {
        rubAmount: 0,
        rate: 57,
    }

    componentDidMount() {
        this.loadActualRate();
    }

    handleAmountChange = event => {
        this.setState({ rubAmount: event.target.value });
    }

    calcUSDsum = () => {
        const { rubAmount, rate } = this.state;
        return (rubAmount / rate).toFixed(4);
    }

    loadActualRate = () => {
        fetch('http://localhost:7070/currencies')
            .then(response => response.json())
            .then(rates => {
                const findUSD = rate => rate.code === 'RUR';
                const rate = rates.find(findUSD).value;
                this.setState({ rate })
            })
    }

    render() {
        const { rubAmount, rate } = this.state;
        return (
            <div>
                <h3>Конвертер валют:</h3>
                <div>Текущий курс: {rate}</div>
                <div>
                    <span>Сумма в рублях: </span>
                    <input
                        type="text"
                        placeholder="Сумма в рублях"
                        onChange={this.handleAmountChange}
                        value={rubAmount} />
                </div>
                <span>Сумма в долларах: {this.calcUSDsum()}</span>
                <div>
                    <button>Загрузить курс валют</button>
                </div>
            </div>
        );
    }
}
