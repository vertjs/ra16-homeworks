import React, { useState }  from 'react'
import BookModel from './BookModel'
import Filter from './Filter'
import nanoid from 'nanoid';

export default function ReadMeMono(props) {
    const [books, setBooks] = useState([])
    const [form, setForm] = useState({name: ''})
    const [filter, setFilter] = useState('')

    const handleFilter = evt => {
        const {value} = evt.target
        setFilter(value)
    }
    const handleChange = evt => {
        const {name, value} = evt.target
        console.log(evt.target)
        setForm(prevForm => ({ ...prevForm, [name]: value}))
    }

    const handleRemove = id => {
        setBooks(prevBooks => prevBooks.filter( o => o.id !== id))
    }

    const handleDone = id => {
        setBooks(prevBooks => prevBooks.map( o => o.id === id ? new BookModel(o.id, o.name, !o.read) : o ))
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        const book = new BookModel(nanoid(), form.name)
        console.log(book)
        setBooks(prevBooks => [...prevBooks, book])
        setForm({name: ''})
    }


    return (
        <React.Fragment>
            <Filter />
            <p>Books list: </p>
            <ul>
                {books
                    .filter(o => o.name.toLowerCase().includes(filter.trim().toLowerCase()))
                    .map( o => <li key={o.id}>
                        {o.read && '✓'} {o.name}
                        <button onClick={() => handleDone(o.id)}>Done!</button>
                        <button onClick={() => handleRemove(o.id)}>Remove</button>
                    </li> )}
            </ul>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Book name: </label>
                <input name="name" value={form.name} onChange={handleChange} />
            </form>
        </React.Fragment>
    )
}