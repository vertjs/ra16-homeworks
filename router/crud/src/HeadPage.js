import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';

export default function HeadPage({url}) {
    const [data] = useJsonFetch(url, [])

    return (
        <div>
            <h1>Главная</h1>
            <span>{data.map(o => <span key={o.id}>{o.id}</span>)}</span>
        </div>
    )
}