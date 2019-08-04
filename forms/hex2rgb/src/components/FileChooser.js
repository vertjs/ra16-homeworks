import React, { useState, useRef }  from 'react'


export default function FileChooser(props) {
    const fileRef = useRef()
    const handleSubmit = evt => {
        evt.preventDefault()
        console.dir(fileRef.current.files)
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="file" ref={fileRef}/>
            <button>Ok</button>
        </form>
    )
}