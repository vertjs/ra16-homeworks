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
            .then(d => {
              setData({id: d}) // setData(prev => ({...prev, id: d}))
            })
        }})
        .then(setInfo({id: 0}))
        .catch(function(error) {
          console.log(error);
        })
        if((data.id !== null) && (data.id.id !==info.id.id)) {
          setData({id: null})// очистка Details 
        }
        
      }
  }, [info.id, data]);



  return (
    <div>
      <List handleChoise={handleChoise}/>
      {data.id !== null ? <Details data={data.id}/> : null }
    </div>
  )
}