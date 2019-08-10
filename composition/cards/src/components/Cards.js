import React from 'react';
import Img from './Img';
import Content from './Content';
import data from './data';

export default function Cards() {
   
    return (
        <div className="card" style={{width: 18 +'rem'}}>
            <Img src="http://prodod.moscow/wp-content/uploads/2018/10/environment-2196690_640.jpg" alt="environment"/>
            <Content title="Card title">{data[0].text}</Content>
        </div>
    )
}