import React from 'react';
import './App.css';
import Watches from './components/Watches'
import WatchesModel from './components/WatchesModel'
import nanoid from 'nanoid';


class App extends React.Component {
  state = {
    time: new Date(),
    name: '',
    hour: '',
    watches: []
  }
  componentDidMount() {
    this.loadActualTime();
  }
  
  loadActualTime = () => {
    setInterval(() => {
      let newTime = new Date(+new Date() + this.state.hour*3600000 + 1000).toLocaleTimeString()
      this.setState({time: newTime})
    }, 1000)
  }

  handleChange = ({target}) => {
    let name = target.name
    this.setState({
      [name]: target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault(); 
    const watches = new WatchesModel(this.state.name, this.state.hour, nanoid() )
    this.setState({
      watches: [...this.state.watches, watches]
    }) 
  }

  componentWillUnmount() {
    clearInterval(this.loadActualTime);
  }

  render() {
    const {name, hour, watches} = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Название" value={name} onChange={this.handleChange}/>
          <input type="number" name="hour" placeholder="Временная зона" value={hour} onChange={this.handleChange}/>
          <button type="submit">Добавить</button>
        </form>

        <div>
          {watches.map((el, id) => 
          <Watches hour={el.hour} name={el.name} key={id} />)}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
