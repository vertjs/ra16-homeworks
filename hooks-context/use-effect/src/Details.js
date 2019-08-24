import React, { Fragment, useState, useEffect } from 'react';

export default function Details({info}) {
    
    console.log(info)

    return (
        <Fragment>
            <div>
                <img src={info.avatar} alt="avatar"/>
            </div>
        </Fragment>
    )
}