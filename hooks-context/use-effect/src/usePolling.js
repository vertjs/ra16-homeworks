import {useState, useEffect, useRef} from 'react';

export default function usePolling(url, id) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`${url}${id}.json`, {
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
            .then(data => {
              setData(data)
              console.log(data)
            })
            .then(setLoading(false))
          }
        }) 
        .catch(function(error) {
          console.log(error);
        })
    }, [])
    
    return data
}