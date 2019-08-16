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
        // вы зачем в переменные окружения виндоус поставили REACT_APP_*? ))
        // всё готово
        // 1. Надо запустить сначала бэкенд (cd backend && npm start)
        // 2. В .env добавить URL после чего перезапустить фронт
        //fetch('http://localhost:7070/currencies')
        console.log(process.env.REACT_APP_API_URL);
        fetch(`${process.env.REACT_APP_API_URL}`)
            .then(response => response.json())
            .then(rates => {
                const findUSD = rate => rate.code === 'AZN';
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
