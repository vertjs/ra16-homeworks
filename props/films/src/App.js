import React from 'react';
import Stars from './components/Stars'
import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <Stars count={0}/>
      <Stars count={5}/>
      <Stars count={2.5}/>
    </React.Fragment>
  );
}