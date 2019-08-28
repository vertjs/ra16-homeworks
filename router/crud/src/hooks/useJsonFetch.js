import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
    const [data, setData] = useState('')
    console.log(url)
    console.log(data)

    useEffect(() => {
        const fetchData = () => {
                fetch(url)
                .then(response => response.json())
                .then(rates => {
                    rates.map(el => {
                       // setData(prev => ({...prev, el}))
                       setData(el)
                    })
                })
        }

        fetchData()

      }, [url])

    return [data];
}