import React from 'react'

export default function Watches({hour, name, id, removeElement}) {
    const time = new Date(+new Date() + hour*3600000).toLocaleTimeString()

    return (
        <div className="watches" key={id}>
            <h2>{name}</h2>
            <div>{time}</div>
            <button className="delete" onClick={removeElement}>del</button>    
        </div>
    )
}

