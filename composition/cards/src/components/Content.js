import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
import data from './data';
import Btn from './Btn';

export default function Content(props) {

    return (
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.children}</p>
            <Btn>{data[0].button}</Btn>            
        </div>
    )
}

Content.propTypes = {
    title: PropTypes.string
}