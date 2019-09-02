import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';
import {Link} from 'react-router-dom';

export default function HeadPage() {
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, [])

    return (
        <div>
            <h1>Главная</h1>
            <Link to='/create'>Добавить пост</Link>
        </div>
    )
}