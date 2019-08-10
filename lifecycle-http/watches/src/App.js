import React from 'react';
import './App.css';
import Form from './components/Form'
import Watches from './components/Watches'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form/>
        <Watches {this.props.date.toLocaleTimeString()}/>
      </React.Fragment>
    )
  }
}

export default App;
