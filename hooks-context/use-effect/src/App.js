import React, {useState, useEffect, useRef, Fragment} from 'react';
import List from './List';
import './App.css';
import Details from './Details';
import usePolling from './usePolling';

export default function App() {
  const [info, setInfo] = useState({id: null})
  const [data, setData] = useState({id: null})

  function handleChoise(id) {
    console.log(id)
    setInfo({id})
  }

  useEffect(() => {
      if(info.id) {
      console.log(info.id)
       
      console.log(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id.id}.json`);
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id.id}.json`, {mode: 'cors'})
      .then(response => {
        if(response.ok) {
          response.json()
          .then(data => setData(prev => ({...prev, id: data}))) //
      }})
      .catch(function(error) {
        console.log(error);
      })
    }
  }, [info.id]);



  return (
    <div>
      <List handleChoise={handleChoise}/>
      {data.id !== null ? <Details data={data.id}/> : null }
    </div>
  )
}