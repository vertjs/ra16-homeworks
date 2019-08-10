import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Content(props) {

    return (
        <button href="#" className="btn btn-primary">{props.children}</button>
    )
}