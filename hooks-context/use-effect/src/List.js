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
          .then(data => setNames(data))
          .then(setLoading(false))     
      }})
      .catch(function(error) {
        console.log(error);
      })
  }, []);


  const getData = (id) => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(setLoading(true))
    .then(response => {
      if(response.ok) {
        response.json()
       /* .then(data => {
          setData(data)
          console.log(data)
        })*/
        .then(json => handleChoise(json))
        .then(setLoading(false))
      }
    })
    
    .catch(function(error) {
      console.log(error);
    })
  }
    return (
      <Fragment>
        
        <ul>
          {name.map(o => 
          <li key={o.id} className="list-item" onClick={() => getData(o.id)}>
            {o.name}
          </li>)}
        </ul>
        {loading && <p>Loading...</p>}
      </Fragment>
      
    )
}