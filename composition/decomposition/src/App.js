import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchMenu from './components/SearchMenu';
import Search from './components/Search';
import Prompt from './components/Prompt';
import AdvertisingSlider from './components/AdvertisingSlider';
import BlockFoot from './components/BlockFoot';
import nanoid from 'nanoid';

export default function App() {
  return (
    <React.Fragment>
      <Header key={nanoid()} />
      <SearchMenu key={nanoid()}/>
      <Search key={nanoid()}/>
      <Prompt key={nanoid()}/>
      <AdvertisingSlider key={nanoid()}/>
      <BlockFoot key={nanoid()}/>
    </React.Fragment>
  );
}