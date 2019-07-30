import React from 'react'
import PropTypes from 'prop-types';

import Star from './Star'

export default function Stars({count}) {
    let boole = true
    if(!Number.isInteger(count) || count > 5 || count < 1) {
        boole = false
    }
    const arr = Array.from({ length: count }, (v, k) => k)
    return (
        boole && (
        <ul className='card-body-stars'>
            {arr.map((li, id) => <li key={id}>{<Star />}</li>)}
        </ul>)
    )
  
}

Stars.propTypes = {
    count: PropTypes.number,
};