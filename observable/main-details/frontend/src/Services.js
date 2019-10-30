import React, { useState, useEffect, Fragment }  from 'react'
import { NavLink } from 'react-router-dom'
import useJsonFetch from './useJsonFetch'

export default function Services() {
   const [{data, loading, error}] = useJsonFetch(process.env.REACT_APP_SERVICES_URL) // загрузка данных с сервера
   const [links, setLinks] = useState([])

    useEffect(() => {
        if(data.length > 1) {
            console.log(data)
        }
    }, [data])

    return (
        <Fragment>
           {data && data.map((el, i) => (
               <NavLink to={el.id + '/details'} exact key={el.id}>
                    <p>{el.name}</p>
                </NavLink>
            ))}
        </Fragment>
    )
}