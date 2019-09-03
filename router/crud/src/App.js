import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import useJsonFetch from './hooks/useJsonFetch'
import HeadPage from './components/HeadPage'
import NotFoundPage from './components/NotFoundPage'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'

function App() {
  const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, [])
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HeadPage} />
        <Route path="/posts/new" exact component={CreatePost}/>
        <Route path="/posts/:id" exact component={EditPost} />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App;