import React from 'react';


export default function Notes({ notes, handleDelete }) {

  return notes.map((note) => (
    <div className='note-container' key={note.id}>
      <button className='note-close' onClick={() => handleDelete(note.id)}>⮿</button>
      <div className='note'>{note.content}</div>
    </div>
  ));
}
