import React, {useState, useEffect, Fragment} from 'react';
import List from './List';
import './App.css';
import Details from './Details';

export default function App() {
  const [info, setInfo] = useState({id: null})
  function handleChoise(id, name) {
    setInfo({id, name})
  }
  return (
    <div>
      <List handleChoise={handleChoise}/>
      {info.id ? <Details info={info}/> : null }
    </div>
  )
}