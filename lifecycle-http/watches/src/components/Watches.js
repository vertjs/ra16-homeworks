import React from 'react'

export default function Watches({hour, name, id}) {
    const time = new Date(+new Date() + hour*3600000).toLocaleTimeString();
    const deleteElement = (event) => event.target.parentNode.remove()
    return (
        <div className="watches" key={id}>
            <h2>{name}</h2>
            <div>{time}</div>
            <button className="delete" onClick={deleteElement} >del</button>  
        </div>
    )
}

