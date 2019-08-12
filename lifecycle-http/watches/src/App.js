import React, { useState, useRef } from 'react';
import './App.css';
import Watches from './components/Watches'


class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    name: '',
    hour: ''
  }
  componentDidMount() {
    this.loadActualTime();
  }

  loadActualTime = () => {
    setInterval(() => {
      this.setState({time: new Date().toLocaleTimeString()})
    }, 1000)
  }

  handleChange = ({target}) => {
    console.log(target.name)
    let name = target.name
    this.setState({
      [name]: target.value
     })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.type);
    console.dir(evt.target); // представление объекта
  }

  render() {
    const {time, name, hour} = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Название" value={name} onChange={this.handleChange}/>
          <input type="number" name="hour" placeholder="Временная зона" value={hour} onChange={this.handleChange}/>
          <button type="submit">Добавить</button>
        </form>
        <Watches time={time} name={name}/>
      </React.Fragment>
    )
  }
}

export default App;
