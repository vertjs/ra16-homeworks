import React from 'react';
import Portfolio from './components/Portfolio';
import './App.css';
import {filters, projects} from './components/date'

function App() {
 
    return (
      <Portfolio filters={filters} projects={projects} />
    )
  
}

export default App;
