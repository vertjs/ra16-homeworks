import React, { useState, useEffect, Fragment }  from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { refreshDetailsRequest } from './actions/actionCreators'
import useJsonFetch from './useJsonFetch'

export default function Services() {
    const [{data, loading, error}] = useJsonFetch(process.env.REACT_APP_SERVICES_URL) // загрузка данных с сервера
    const dispatch = useDispatch()

    const handleToRef = (id) => {
        dispatch(refreshDetailsRequest(id))
    }

    const handleRefresh = () => { // обновление страницы при ошибке

    }

    return (
        <Fragment>
           {data && data.map((el, i) => (
               <ul key={i}>
                   <li key={el.id} onClick={() => handleToRef(el.id)}>
                        <NavLink to={el.id + '/details'} exact>{el.name}</NavLink>
                   </li>
               </ul>
            ))}
            {loading  && (
                <h2>Loading...</h2>
            )}
            {error && (
                <div>
                    <p>Произошла ошибка!</p>
                    <button onClick={handleRefresh}>Повторить запрос</button>
                </div>
            )}
        </Fragment>
    )
}