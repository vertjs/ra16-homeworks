import React, { Fragment, useState, useEffect } from 'react';
import usePolling from './usePolling';

export default function Details({data}) {
    console.log(data)
    //const [loading, setLoading] = useState(false)
    
  

    return (
        <Fragment>
            <div>
                <img src={data.avatar} alt="avatar"/>
            </div>
        </Fragment>
    )
}