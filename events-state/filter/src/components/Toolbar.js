import React from 'react';


function Toolbar(props) { //фильтры 
    const {filters, selected, onSelectFilter } = props
    return (
      <div>
        {filters.map(f => {
          const className = f === selected ? 'filter-selected' : 'filter'        
          return (
            <button className={className} onClick={e => onSelectFilter(f)}> {f} </button>   
          )
        })}
      </div>
    )
  }

  export default Toolbar