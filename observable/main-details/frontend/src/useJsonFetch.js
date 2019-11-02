import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
    const [info, setData] = useState({
        items: [],
        loading: false,
        error: null,
    })

    useEffect(() => {
        fetch(url, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }})
        .then(setData(prev => {
            return { ...prev, loading: true}
        }))
        .then(res => {
            if(res.ok) {
                res.json()
                .then(i => {
                    setData(prev => {
                        return {...prev, items: i, loading: false}
                    })})
            } else {
                setData(prev => {
                    return { ...prev, loading: false, error: res.text}
                })
            }
        })
        .catch(err => {
            console.log(err) 
            setData(prev => {
                return { ...prev, loading: false, error: true}
            })
        })
    }, [url])

    return [info];
}
