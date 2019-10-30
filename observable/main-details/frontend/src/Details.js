import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useJsonFetch from './useJsonFetch'
import { refreshDetailsRequest } from './actions/actionCreators';


export default function Details({match}) {
    const [{data, loading, error}] = useJsonFetch(process.env.REACT_APP_SERVICES_URL + '/' + match.params.id) // загрузка данных с сервера
    const dispatch = useDispatch();

    const handleRefresh = () => {
        const {id} = match.params
        console.log(id)
        dispatch(refreshDetailsRequest(id))
    }

    return (
        <Fragment>
            {data.length === undefined && (
                <Fragment>
                    <h2>{data.name}</h2>
                    <p></p>
                    <p>{data.content} - {data.price} руб.</p>
                </Fragment>
            )}
            {loading && (
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
