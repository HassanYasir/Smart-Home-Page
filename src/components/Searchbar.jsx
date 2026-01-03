import { useState } from 'react';
import google from '../assets/google.png'
import search from '../assets/search.png'
import '../App.css'



function Searchbar () {
    const [inpVal,setInpVal] = useState("Search here....");

    const googleSearch = ()=>{
      if(inpVal !== "Search here...."  && inpVal !== ""){
        let cleanQuery = inpVal.replace(" ", "+",inpVal);
        let url = 'http://www.google.com/search?q=' + cleanQuery;
        window.location.href = url;
        setInpVal("");
      }
    }

    const keyHandler = (e)=>{
      if(e.key === "Enter"){
        googleSearch();
      }
    }


    return (
      <>
         
      <div id="search-container">
        <div id="input-container">
            <img src={google} alt="" />
            <input type="text" id="search" value={inpVal} 
            onChange={e => setInpVal(e.target.value)} onKeyDown={keyHandler} onClick={()=>{inpVal === "Search here...."?setInpVal(""):inpVal}}/>
            <img src={search} alt="" id="search-button" onClick={googleSearch}/>
        </div>
      </div>
      </>
    );
  
}

export default Searchbar;