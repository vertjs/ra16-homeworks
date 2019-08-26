import React, { Fragment } from 'react';

export default function Details({data}) {
    return (
        <Fragment>
            <div>
                <img src={data.avatar} alt="avatar"/>
                <h2>{data.name}</h2>
                <p>City: {data.details.city}</p>
                <p>Company: {data.details.company}</p>
                <p>Position: {data.details.position}</p>
            </div>
        </Fragment>
    )
}