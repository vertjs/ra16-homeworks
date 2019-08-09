import React from 'react';
import './App.css';
import News from './components/News';
import SearchMenu from './components/SearchMenu';
import Search from './components/Search';
import Prompt from './components/Prompt';
import AdvertisingSlider from './components/AdvertisingSlider';
import BlockFoot from './components/BlockFoot';
import {filtres} from './data/filtres'


export default function App() {
  return (
    <React.Fragment>
      <News />
      <SearchMenu filtres={filtres}/>
      <Search />
      <Prompt />
      <AdvertisingSlider />
      <BlockFoot />
    </React.Fragment>
  );
}