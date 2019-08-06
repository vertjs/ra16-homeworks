import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchMenu from './components/SearchMenu';
import Search from './components/Search';
import Prompt from './components/Prompt';
import AdvertisingSlider from './components/AdvertisingSlider';
import BlockFoot from './components/BlockFoot';

export default function App() {
  return (
    <React.Fragment>
      <Header list={data}/>
      <SearchMenu />
      <Search />
      <Prompt />
      <AdvertisingSlider />
      <BlockFoot />
    </React.Fragment>
  );
}