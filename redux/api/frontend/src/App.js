import React, {Fragment} from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import CurrentElement from './components/CurrentElement';
import ServiceAddClassBased from './components/ServiceAddClassBased';
import ServiceListClassBased from './components/ServiceListClassBased';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
 <Fragment>
      <Router>
        <Route path="/services/:id" exact component={CurrentElement} />
        <Route path="/" exact component={ServiceAdd}/>
        <Route path="/" exact component={ServiceList}/>
      </Router>
        <hr />
      </Fragment>

  );
}

export default App;
