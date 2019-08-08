import React from 'react';
import './App.css';
import News from './components/News';
import SearchMenu from './components/SearchMenu';
import Search from './components/Search';
import Prompt from './components/Prompt';
import AdvertisingSlider from './components/AdvertisingSlider';
import BlockFoot from './components/BlockFoot';
import nanoid from 'nanoid';
import {filtres} from './data/filtres'


export default function App() {
  return (
    <React.Fragment>
      <News key={nanoid()}/>
      <SearchMenu key={nanoid()} filtres={filtres}/>
      <Search key={nanoid()}/>
      <Prompt key={nanoid()}/>
      <AdvertisingSlider key={nanoid()}/>
      <BlockFoot key={nanoid()}/>
    </React.Fragment>
  );
}