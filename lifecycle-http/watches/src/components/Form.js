import React from 'react'

export default function Form() {
    const handleSubmit = () => {
        console.log('handleSubmit')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"/>
            <input type="number" name="timzone"/>
            <button type="submit">Добавить</button>
        </form>
    )
}