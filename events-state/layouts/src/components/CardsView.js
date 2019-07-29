import React from 'react';
import PropTypes from 'prop-types'

function CardsView(props) {
  let {cards} = props
    return (
      <div className="cardview">{cards}</div>
    )
};
  
export default CardsView

CardsView.propTypes = {
  cards: PropTypes.instanceOf(Object).isRequired
}
