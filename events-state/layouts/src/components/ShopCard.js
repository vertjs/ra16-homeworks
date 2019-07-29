import React from 'react';
import PropTypes from 'prop-types'

function ShopCard(props) {
    const {products} = props
    let arr = products.map(el => 
      <div className="shopcard" key={`${el.name}_${el.color}`}>
        <img alt={el.name} src={el.img} />
        <div className="title">
          <h2>{el.name}</h2>
          <p style={{color: "#555555"}}>{el.color}</p>
        </div>
        <div className="footer">                    
          <p style={{color: "red"}}>${el.price}</p>
          <button className="btn">Add to card</button>
         </div>
      </div> 
   )
    return (
      <div>{arr}</div>
    );
};

export default ShopCard

ShopCard.propTypes = {
  products: PropTypes.array.isRequired
}