import React,{ useState } from 'react'
import Notes from './Notes'
import NoteModel from './NoteModel'
import nanoid from 'nanoid';

export default function Crud(props) {
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
  }

  const loadActualNotes = () => {
    console.log(process.env.REACT_APP_API_URL);
    fetch(`${process.env.REACT_APP_API_URL}`)
    .then(response => response.json())
    .then(arr => arr.map(el => setNotes(prevNotes => [...prevNotes, el])))
    console.log(notes)
  }

  const handleDelete = id => {
    console.log(`${process.env.REACT_APP_API_URL}/:${id}`)
    fetch(`${process.env.REACT_APP_API_URL}/:${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(notes[id])
    })
    .then(response => console.log(response)) // {return response.json()}
    .then(result => console.log(result)) //setNotes(prevNotes => prevNotes.filter( o => o.id !== id))
    
  }

    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
          <textarea value={form.content} onChange={handleChange}/>
          <div className="btn">
            <button>Добавить заметку</button>
            <button type="button" onClick={loadActualNotes}>Загрузить заметки</button>
          </div>
        </form>
        <div className="App">
          <Notes notes={notes} handleDelete={handleDelete}/>
        </div>
    </div>
    )
  
}