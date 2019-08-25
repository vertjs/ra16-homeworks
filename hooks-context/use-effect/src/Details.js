import React, { Fragment, useState, useEffect } from 'react';

export default function Details({info}) {
    const [loading, setLoading] = useState(false)
    console.log(info)

    const getData = (info) => {
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info}.json`, {
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
            .then(json =>  console.log(json))
            .then(setLoading(false))
          }
        }) 
        .catch(function(error) {
          console.log(error);
        })
      }

    return (
        <Fragment>
            <div>
                <img src={info.avatar} alt="avatar"/>
            </div>
        </Fragment>
    )
}