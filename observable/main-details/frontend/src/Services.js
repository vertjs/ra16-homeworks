import React, { useState, useEffect, Fragment }  from 'react'
import useJsonFetch from './useJsonFetch'

function Services() {
    const url = process.env.REACT_APP_SERVICES_URL
    const [{data, loading, error}] = useJsonFetch(url) // загрузка данных с сервера

    useEffect(() => {
        console.log(data)
    }, [url])

    return (
        <div>
            <h2>Hello</h2>
        </div>
    )
}

export default Services
