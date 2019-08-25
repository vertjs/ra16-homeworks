import React, {useState, useEffect, Fragment} from 'react';

export default function List({handleChoise}) {
  const [name, setNames] = useState([])
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', {mode: 'cors'})
    .then(response => {
      setLoading(true)
      if(response.ok) {
        response.json()
        .then(data => setNames(data)) //setNames
        .then(setLoading(false))     
    }})
    .catch(function(error) {
      console.log(error);
    })
}, []);
 
  return (
    <Fragment>
      
      <ul>
        {name.map(o => 
        <li key={o.id} className="list-item" onClick={() => handleChoise(o)}> {/*() => getData(o.id)*/}
          {o.name}
        </li>)}
      </ul>
      {loading && <p>Loading...</p>}
    </Fragment>
    
  )
}