import React, {useState, useEffect, Fragment} from 'react';

export default function List({handleChoise}) {
    const [name, setNames] = useState([])

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', {mode: 'cors'})
      .then(response => response.json())
      .then(data => setNames(data))
  }, []);


    
    return (
      <Fragment>
        <ul>
          {name.map(o => 
          <li key={o.id} className="list-item">
            <a>{o.name}</a>
          </li>)}
        </ul>
      </Fragment>
      
    )
}