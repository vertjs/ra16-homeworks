import React from 'react';
import Store from './components/Store'
import {products} from './components/data'
import './App.css';

class App extends React.Component {
  render() {
    return <Store products={products}/>
  }
};



export default App;
