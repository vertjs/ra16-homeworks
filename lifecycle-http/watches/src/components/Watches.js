import React from 'react'

export default function Watches({watches, handleDelete}) {

    return watches.map(el => (
        <div className="watches" key={el.id}>
            <h2>{el.name}</h2>
            <div>{new Date(+new Date() + el.hour*3600000).toLocaleTimeString()}</div>
            <button className="delete" onClick={() => handleDelete(el.id)} >del</button>  
        </div>
    ));
}

