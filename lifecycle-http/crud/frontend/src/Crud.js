import React, { Component } from 'react'
import Notes from './Notes'
import nanoid from 'nanoid';

export default class Crud extends Component {
    state = {
        notes: [],
        value: ''
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const id = Math.random().toString().slice(2, 4);
      const newNote = { id, content: this.state.value };
      this.setState({notes: [...this.state.notes, newNote] })
      console.log(this.state.notes)
      console.log(this.state.value)
      
    }

    handleChange = (e) => {
      this.setState({ ...this.state, value: e.target.value });
      console.log(this.state.value)
    }

    componentDidMount() {
      this.loadActualNotes();
    }

    componentWillUnmount() {
      this.loadActualNotes();
    }

    loadActualNotes = () => {
      console.log(process.env.REACT_APP_API_URL);
      console.log(this.state.notes)
      fetch(`${process.env.REACT_APP_API_URL}`)
      .then(response => response.json())
      .then(arr => arr.map(el => this.setState({notes: [...this.state.notes, el] })))
      //.then(rates => this.setState({ notes: rates })) 
      console.log(this.state.notes)
    //  
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="form">
              <textarea
                rows="3"
                cols="50"
                placeholder="Ввести текст"
                onChange={this.handleChange}
                value={this.state.value}
                key={nanoid()}
              />
              <div className="btn">
                <button>Добавить заметку</button>
                <button type="button" onClick={this.loadActualNotes}>Загрузить заметки</button>
              </div>
            </form>
            <div className="App">
             { /*<Notes delNote={this.delNote} notes={this.state.notes} />*/}
            </div>
          </div>
        )
    }
}