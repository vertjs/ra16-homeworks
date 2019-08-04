import React, { useState }  from 'react'
import PropTypes from 'prop-types'

export default function Filter(props) {
    const handleFilter = evt => {
        const {value} = evt.target
        props.onFilter(value)
    }

    return (
        <React.Fragment>
            <label htmlFor="search">Filter: </label>
            <input type="search" id="search" value={props.filter} onChange={handleFilter} />
        </React.Fragment>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired
}