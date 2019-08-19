import React,{ useState } from 'react'
import Notes from './Notes'
import NoteModel from './NoteModel'
import nanoid from 'nanoid';
import Send from './send.png'
import Synchronized from './synchronized.png'

export default function Crud() {
  const [notes, setNotes] = useState([])
  const [form, setForm] = useState({content: ''})

  const handleSubmit = (e) => { // добавление
    e.preventDefault();
    const newNote = new NoteModel(nanoid(), form.content)
    setNotes(prevNotes => [...prevNotes, newNote])
    setForm({content: ''})
  }

  const handleChange = (e) => {
    const {value} = e.target
    setForm(prev => ({...prev, content: value}))
  }

  const loadActualNotes = () => { // обновление
    fetch(`${process.env.REACT_APP_API_URL}`)
    .then(response => response.json()) 
    .then(arr => arr.map(el => setNotes(prevNotes => [...prevNotes, el])))
  }

  const loadNotes = () => { // загрузка 
    console.log(process.env.REACT_APP_API_URL)
    fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    .then(response => response.json()) 
    .then(arr => arr.map(el => setNotes(prevNotes => [...prevNotes, el])))
  }

  const handleDelete = id => { // удаление
    fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    .then(body => {
      let urlId = body.url.split('/')
      return urlId[urlId.length - 1]
    })
    .catch(err => console.log(`Err ${err}`))
    .then(id => setNotes(prevNotes => prevNotes.filter( o => o.id !== id)))
  }

  return (
    <div onLoad={loadNotes}>
      <form onSubmit={handleSubmit} className="form">
        <span>
          <h1>Notes</h1>
          <button type="button" onClick={loadActualNotes} className="update">
            <img src={Synchronized} alt="update" width='20px' height='25px'/>
          </button>
        </span>
        <span>
          <textarea value={form.content} onChange={handleChange} rows="7" cols="50"/>
          <button className="send">
            <img src={Send} alt="send" width='30px' height='25px'/>
          </button>   
        </span>
      </form>

      <div className="notes">
        <Notes notes={notes} handleDelete={handleDelete}/>
      </div>
  </div>
  )
}