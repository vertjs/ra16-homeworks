import React from 'react'; 
import PropTypes from 'prop-types'

export default function Img({src, alt}) {
    return (
        <img src={src} className="card-img-top" alt={alt}/>
    )
}

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}