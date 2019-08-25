import React, {useState, useEffect, Fragment} from 'react';
import List from './List';
import './App.css';
import Details from './Details';
import usePolling from './usePolling';

export default function App() {
  const [info, setInfo] = useState({id: null})
  const [{data: id}] = usePolling(process.env.REACT_APP_NAMES_URL)

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