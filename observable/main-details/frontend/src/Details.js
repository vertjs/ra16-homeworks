import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { refreshDetailsRequest, searchDetailsFailure } from './actions/actionCreators';

export default function Details({match}) {
    const { data, loading, error } = useSelector(state => {
       // console.log(state.details)
        return state.details;
    })
    const dispatch = useDispatch()

    useEffect(() => {
        if(Object.keys(data).length === 0) {
            dispatch(searchDetailsFailure('error'))
        }
    }, [data, dispatch])

    const handleRefresh = () => { // обновление страницы при ошибке
        let {id} = match.params
        console.log(id)
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
            {error && ( /*Object.keys(data).length === 0 || */
                <div>
                    <p>Произошла ошибка!</p>
                    <button onClick={handleRefresh}>Повторить запрос</button>
                </div>
            )}
        </Fragment>
    )
}
