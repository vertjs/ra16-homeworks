import React from 'react';
//import Note from './Note';

export default function Notes({ notes, delNote }) {
  return notes.map(note => (
    console.log(note)
    //<Note key={note.id} delNote={delNote} note={note.content} />

  /*<div className='note-container'>
    <div className='note-close' onClick={() => delNote(note.id)}>X</div>
    <div className='note'>{note.content}</div>
  </div>*/
  ));
}
