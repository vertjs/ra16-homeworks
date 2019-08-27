import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
    const [data, setData] = useState(null)
    console.log(url)
    console.log(data)

    useEffect(() => {
        const fetchData = () => {
                fetch(url)
                .then(response => response.json())
                .then(rates => {
                    setData(rates)
                    console.log(rates)
                })
        }

        fetchData()

      }, [url])

    return [data];
}