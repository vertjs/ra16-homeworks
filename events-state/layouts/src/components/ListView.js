import React from 'react';
import PropTypes from 'prop-types'

function ListView(props) {
    return (
      <ul className="listview">{props.items}</ul>
    )
  }

export default ListView

ListView.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired
}