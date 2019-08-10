import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Watches from './components/Watches'


function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"))
  setInterval(setTime(new Date().toLocaleTimeString("en-GB")),1000)
  return (
    <React.Fragment>
      <Form/>
      <Watches time={time}/>
    </React.Fragment>
  );
}

export default App;
