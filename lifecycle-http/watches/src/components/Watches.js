import React from 'react'

export default function Watches({time, name}) {
    
    return (
        <div className="watches">
            <h2>{name}</h2>
         {time}   
        </div>
    )
}

