import React, { useState, useEffect, Fragment }  from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { refreshDetailsRequest, refreshItemsRequest } from './actions/actionCreators'
import useJsonFetch from './useJsonFetch'

export default function Services() {
   // let [{items, loading, error}] = useJsonFetch(process.env.REACT_APP_SERVICES_URL) // загрузка данных с сервера
    const dispatch = useDispatch()

    const { items, loading, error } = useSelector(state => {
        console.log(state.details)
        return state.details;
     })

    if(!items) {
        dispatch(refreshItemsRequest())
    }

    useEffect(() => {
        console.log(items)
       /* if(!items) {
            dispatch(refreshItemsRequest())
        }*/
    }, [items])

    const handleToRef = (id) => {
        dispatch(refreshDetailsRequest(id))
    }

    const handleRefresh = () => { // обновление страницы при ошибке
        dispatch(refreshItemsRequest())

        console.log(items)
    }

    return (
        <Fragment>
           {items && items.map((el, i) => (
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