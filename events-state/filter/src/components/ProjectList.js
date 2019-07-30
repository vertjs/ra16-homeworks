import React from 'react';
import PropTypes from 'prop-types'

function ProjectList(props) { // отображение проектов
    const {projects} = props
    return (
      <div className="portfolioList">{ projects.map((p, i) => <div key={`${p.category}_${i++}`}><img alt={p.category} src={p.img}/></div>) }</div>
    )
  }

  export default ProjectList

  ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
  }