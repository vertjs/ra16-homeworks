import React from 'react'


export default class Listing extends React.Component {
    sliceString = (sentence) => {
        if(sentence.length > 50) {
            const newStr = sentence.slice(0, 50)
            return `${newStr}...`;
        } else {
            return sentence;
        }
    }
    codeCurrency = (currency) => {
        if(currency === 'USD') {
            return '$';
        } else if(currency === 'EUR') {
            return '€';
        } else {
            return 'GBP';
        }
    }
    calculateLeft = (left) => {
        if( (left < 10) || (left === 10) ) {
            return 'item-quantity level-low';
        } else if( (left < 20) || (left === 20) ) {
            return 'item-quantity level-medium';
        } else if(left > 20) {
            return 'item-quantity level-high';
        }
    }

    render() {
        const {data} = this.props
        return (
            data.map(el => {
                return  (
                    <div className="item" key={el.listing_id}>
                        <div className="item-image">
                            <a href={el.url}>
                                <img src={el.MainImage.url_570xN} alt={el.title}/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{this.sliceString(el.title)}</p>
                            <p className="item-price">{this.codeCurrency(el.currency_code)}{el.price}</p>
                            <p className={this.calculateLeft(el.quantity)}>{el.quantity} left</p>
                        </div>
                    </div>
                    
                )
            })
        )   
    }
}