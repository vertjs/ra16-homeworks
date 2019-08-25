import React, {useState, useEffect, useRef, Fragment} from 'react';
import List from './List';
import './App.css';
import Details from './Details';

export default function App() {
  const [info, setInfo] = useState({id: null})
  const [data, setData] = useState({id: null})

  function handleChoise(id) { // получение нового id
    setInfo({id})
  }

  useEffect(() => {
      if(info.id) {
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id.id}.json`, {mode: 'cors'})
      .then(response => {
        if(response.ok) {
          response.json()
          .then(data => setData(prev => ({...prev, id: data}))) 
      }})
      .then(setInfo({id: 0}))
      .catch(function(error) {
        console.log(error);
      })
      setData({id: null}) // очистка Details
    }
  }, [info.id]);



  return (
    <div>
      <List handleChoise={handleChoise}/>
      {data.id !== null ? <Details data={data.id}/> : null }
    </div>
  )
}