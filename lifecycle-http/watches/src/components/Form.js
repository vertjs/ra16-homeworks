import React, {useState} from 'react'

export default function Form({name}) {
    const [n, setCount] = useState(name);
    const handleSubmit = (e) => {
        setCount(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Название" value={n}/>
            <input type="number" name="timzone" placeholder="Временная зона"/>
            <button type="submit">Добавить</button>
        </form>
    )
}