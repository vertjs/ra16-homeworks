import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { refreshDetailsRequest } from './actions/actionCreators';

export default function Details({match}) {
    const { data, loading, error } = useSelector(state => {
        return state.details;
    })

    const dispatch = useDispatch()    

    const handleRefresh = () => { // обновление страницы при ошибке
        const {id} = match.params
        dispatch(refreshDetailsRequest(id))
    }

    return (
        <Fragment>
            {Object.keys(data).length !== 0 && (
                <Fragment>
                    <h2>{data.name}</h2>
                    <p></p>
                    <p>{data.content} - {data.price} руб.</p>
                </Fragment>
            )}
            {loading && (
                <h2>Loading...</h2>
            )}
            {( Object.keys(data).length === 0 || error ) && (
                <div>
                    <p>Произошла ошибка!</p>
                    <button onClick={handleRefresh}>Повторить запрос</button>
                </div>
            )}
        </Fragment>
    )
}
