import React, { Fragment, useState, useEffect } from 'react';
import usePolling from './usePolling';

export default function Details({info}) {
    console.log(info)
    const [loading, setLoading] = useState(false)
    const data = usePolling(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/`, info.id)
    console.log(data)



    return (
        <Fragment>
            <div>
                <img src={info.avatar} alt="avatar"/>
            </div>
        </Fragment>
    )
}