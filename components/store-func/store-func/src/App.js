import React from 'react'
import ShopItemFunc from './ShopItemFunc.js'
import './App.css'

function App({item}) {

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}



export default App;
