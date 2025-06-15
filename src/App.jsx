// import { useState } from 'react'
import Searchbar from './components/Searchbar'
import ShortCutcont from './components/ShortCutcont';
import Newsnav from './components/Newsnav';
import './App.css'




function App() {

  return (
    <>
      <Searchbar />
      <ShortCutcont/>
      <Newsnav opt={["technology","science","health","palestine"]}/>

    </>
  )
}

export default App;
