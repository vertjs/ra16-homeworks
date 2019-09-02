import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeadPage from './HeadPage'
import NotFoundPage from './NotFoundPage';
import CreatePage from './CreatePage';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={HeadPage} />
        <Route path="/create" exact={true} component={CreatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App;
