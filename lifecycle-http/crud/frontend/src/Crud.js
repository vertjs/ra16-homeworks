import React,{ useState } from 'react'
import Notes from './Notes'
import NoteModel from './NoteModel'
import nanoid from 'nanoid';

export default function Crud() {
  const [notes, setNotes] = useState([])
  const [form, setForm] = useState({content: ''})

  const handleSubmit = (e) => {
      e.preventDefault();
      const newNote = new NoteModel(nanoid(), form.content)
      console.log(newNote) 
      setNotes(prevNotes => [...prevNotes, newNote])
      setForm({content: ''})
      console.log(notes) 
  }

  const handleChange = (e) => {
    const {value} = e.target
    setForm(prev => ({...prev, content: value}))
    console.log(form.content)
  }

  const loadActualNotes = () => {
    console.log(process.env.REACT_APP_API_URL);
    console.log(notes)
    fetch(`${process.env.REACT_APP_API_URL}`)
    .then(response => response.json())
    .then(arr => arr.map(el => setNotes(prevNotes => [...prevNotes, el])))
    
    console.log(notes)
  }
    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
          <textarea
            rows="3"
            cols="50"
            placeholder="Ввести текст"
            onChange={handleChange}
            value={form.content}
            key={nanoid()}
          />
          <div className="btn">
            <button>Добавить заметку</button>
            <button type="button" onClick={loadActualNotes}>Загрузить заметки</button>
          </div>
        </form>
        <div className="App">
          { /*<Notes notes={this.state.notes} />*/}
        </div>
    </div>
    )
  
}