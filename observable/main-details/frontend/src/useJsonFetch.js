import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
    const [info, setData] = useState({
        data: [],
        loading: false,
        error: null,
    })

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVICES_URL)
        .then(setData(prev => {
            return { ...prev, loading: true}
        }))
        .then(res => {
            if(res.ok) {
               setData(prev => {
                   console.log(res)
                   return {...prev, data: res, loading: false}
               })
            } else {
                setData(prev => {
                    return { ...prev, error: res.text, loading: false}
                })
            }
        })
        .then(setData(prev => {
            return { ...prev, loading: false}
        }))
        .catch(err => console.log(err))
    }, [url])

    return [info];
}
