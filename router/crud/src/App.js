import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeadPage from './HeadPage'
import NotFoundPage from './NotFoundPage';
import CreatePost from './CreatePost'; 

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HeadPage} />
        <Route path="/posts/new" exact component={CreatePost}/>
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App;