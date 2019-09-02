import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeadPage from './HeadPage'
import NotFoundPage from './NotFoundPage';
import CreatePage from './CreatePage'; //?
import CreatePost from './CreatePost'; 

function App() {
  
  return (
    <Router>
      <Route exact path="/" component={HeadPage} />
      <Route exact path="/posts/:new" component={CreatePost}/>
      <Route path="/create" exact={true} component={CreatePage} /> 
      <Route component={NotFoundPage} />
    </Router>
  )
}

export default App;