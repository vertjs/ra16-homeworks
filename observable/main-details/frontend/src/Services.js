import React, { useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { refreshDetailsRequest, refreshItemsRequest } from './actions/actionCreators'


export default function Services() {
    const dispatch = useDispatch()

    const { items, loading, error } = useSelector(state => {
        return state.details;
    })

    useEffect(() => {
        if(items.length === 0) {
            dispatch(refreshItemsRequest())
        }
    }, [items, dispatch])

    const handleToRef = (id) => {
        dispatch(refreshDetailsRequest(id))
    }

    const handleRefresh = () => { // обновление страницы при ошибке
        dispatch(refreshItemsRequest())
        console.log(items)
    }

    return (
        <div className="card" style={{"width": "30rem"}}>
           {items && items.map((el, i) => (
                <ul key={i} className="list-group list-group-flush">
                    <li key={el.id} onClick={() => handleToRef(el.id)}>
                        <NavLink to={el.id + '/details'} exact className="list-group-item">{el.name}</NavLink>
                    </li>
                </ul>
            ))}
            {loading  && (
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