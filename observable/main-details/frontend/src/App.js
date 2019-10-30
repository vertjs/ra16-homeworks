import React from 'react';
import Services from './Services';
import Details from './Details';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Services} />  
        <Route path="/:id/details" exact component={Details} />
      </Switch>
    </Router>
  );
}