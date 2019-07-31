import React from 'react';
import './main.css';
import Listing from './components/Listing';
import {etsy} from './components/data'

function App() {
  const arr = []
  etsy.map(el => {
    const {listing_id, url, MainImage, title, currency_code, price, quantity, category_id} = el
    return arr.push({listing_id, url, MainImage, title, currency_code, price, quantity, category_id});
  })

  console.log(arr)
  const data = arr.filter(el => el.MainImage !== undefined )

  return (
    <React.Fragment>
      <div className="item-list"> 
        <Listing data={data} />
      </div>
    </React.Fragment>
  )
}

export default App;
