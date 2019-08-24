import React, {useState, useEffect, Fragment} from 'react';
import List from './List';
import './App.css';
import Details from './Details';

export default function App() {
  const [info, setInfo] = useState({id: null})

  function handleChoise(id) {
    console.log(id)
    setInfo({id})
  }
  
  return (
    <div>
      <List handleChoise={handleChoise}/>
      {info.id ? <Details info={info.id}/> : null }
    </div>
  )
}