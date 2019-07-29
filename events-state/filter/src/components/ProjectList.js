import React from 'react';


function ProjectList(props) { // отображение проектов
    const {projects} = props
    return (
      <div className="portfolioList">{ projects.map(p => <div><img alt={p.category} src={p.img}/></div>) }</div>
    )
  }

  export default ProjectList