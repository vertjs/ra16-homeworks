import React, { Fragment, useState, useEffect } from 'react';
import usePolling from './usePolling';

export default function Details({info}) {
    console.log(info)
    //const [loading, setLoading] = useState(false)
    
  

    return (
        <Fragment>
            <div>
                <img src={info.avatar} alt="avatar"/>
            </div>
        </Fragment>
    )
}