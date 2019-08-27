import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeadPage from './HeadPage'
import './App.css';

function App() {
  
  return (
    <Router>
      <Route path="/">
        <HeadPage url={process.env.REACT_APP_DATA_URL}/>
      </Route>

    </Router>
  )
}

export default App;
