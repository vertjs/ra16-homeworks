import React from 'react';

function IconSwitch(props) {
    return (
      <button onClick={props.onSwitch}><i className='material-icons'>{props.icon}</i></button>
    )
  }

export default IconSwitch