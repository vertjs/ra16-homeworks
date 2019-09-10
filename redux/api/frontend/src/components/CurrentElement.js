import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch'


function CurrentElement({match}) {
    console.log(process.env.REACT_APP_DATA_URL)
    const [data] = useJsonFetch(process.env.REACT_APP_API_URL, [])
    console.log(data)
    const url = process.env.REACT_APP_DATA_URL + '/' + match.params.id
    console.log(url)
    return (
        <h1>CurrentElement</h1>
    )
}

export default CurrentElement;