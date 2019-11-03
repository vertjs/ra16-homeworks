import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { refreshDetailsRequest, searchDetailsFailure } from './actions/actionCreators';

export default function Details({match}) {
    const {id} = match.params
    const { data, loading, error } = useSelector(state => {
        return state.details;
    })
    const dispatch = useDispatch()

    useEffect(() => {
        if(Object.keys(data).length === 0) {
            dispatch(refreshDetailsRequest(id))
        }
    }, [data, dispatch])

    const handleRefresh = () => { // обновление страницы при ошибке
        dispatch(refreshDetailsRequest(id))
    }

    return (
        <div className="card" style={{"width": "40rem"}}>
            {Object.keys(data).length !== 0 && (
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p></p>
                    <p className="card-text">{data.content} - {data.price} руб.</p>
                </div>
            )}
            {loading && (
               <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            )}
            {error && ( 
                <div>
                    <p>Произошла ошибка!</p>
                    <button onClick={handleRefresh}>Повторить запрос</button>
                </div>
            )}
        </div>
    )
}
