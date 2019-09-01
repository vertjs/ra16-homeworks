import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeadPage from './HeadPage'
import './App.css';
import CreatePost from './CreatePost';

function App() {
  
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <HeadPage url={process.env.REACT_APP_DATA_URL}/>
      </Route>
      <Route exact path="/posts/:new" component={CreatePost}/>
      </Switch>
    </Router>
  )
}

export default App;