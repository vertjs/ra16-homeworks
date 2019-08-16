import React from 'react';


export default function Notes({ notes }) {
  return notes.map(note => (
    console.log(note)

  /*<div className='note-container'>
    <div className='note-close'>X</div>
    <div className='note'>{note.content}</div>
  </div>*/
  ));
}
