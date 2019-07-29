import React, { PureComponent } from 'react'
import projects from './Value'
import Toolbar from './Toolbar'

export class Portfolio extends PureComponent {
    super(props) {
        this.state = {
            filters: [],
            projects: projects
        }
    }
    render() {
      //  console.log(props.filters)
        return (
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected="All"
                onSelectFilter={(filter) => {console.log(filter);}}
            />
        )
    }
}

export default Portfolio
