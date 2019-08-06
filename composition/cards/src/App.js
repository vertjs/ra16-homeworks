import React from 'react';
import Img from './components/Img';
import Content from './components/Content';

export default function App() {
  return (
    <div className="card" style={{width: 18 +'rem'}}>
      <Img />
      <Content/>
    </div>
  );
}