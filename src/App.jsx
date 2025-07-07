// import { useState } from 'react'
import Searchbar from './components/Searchbar'
import ShortCutcont from './components/ShortCutcont';
import Newsnav from './components/Newsnav';
import Settings from './components/Settings';
import Nav from './components/Nav';
import './App.css'
import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';




function App() {
  const [setting,setSetting] = useState(false);
  const mainColor = useSelector((state) => state.color); 
  useEffect(()=>{
    document.documentElement.style.setProperty('--main-color',mainColor);
  },[])
  const toggleSetting = ()=>{
    setSetting(!setting);
  }

  return (
    <>
      <Nav toggleSetting={toggleSetting}/>
      <Searchbar />
      <ShortCutcont/>
      <Newsnav />
      {setting && <Settings toggleSetting={toggleSetting} />}

    </>
  )
}

export default App;
