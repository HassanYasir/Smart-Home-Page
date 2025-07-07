import NewsContainer from './NewsContainer';
import { useState } from 'react';
import '../App.css'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';



function Newsnav (){
    const categorys = useSelector((state) => state.category);
    const [lineStyle,SetlineStyle] = useState({});
    const [cate,Setcategory] = useState({data:categorys[0]});
    const [dataCach,SetdataCach] = useState([]);
    const apiCode = import.meta.env.VITE_API_KEY;

    const AdddataCach = (data)=>{
        SetdataCach((prevdata)=>[...prevdata,data])
    }
    const optHandler = (e)=>{

        SetlineStyle({
            width:`${e.target.getBoundingClientRect().width}px`,
            position:'absolute',
            left:`${e.target.getBoundingClientRect().left}px`,
            marginTop: `24px`,
            marginLeft:'0'
            
        });

        Setcategory({data:e.target.innerText});
        
        
    }


    return (
        <>
        <div className="nav">
        <div className="options">
            <div className="opt-container">

            {categorys.length !== 0?categorys.map((opt)=>{
                return (
                    <div key={opt}className="op1"  onClick={optHandler}>{opt}
                    </div>
                );
                
            }):<div className="op1">Empty</div>}
            </div>
            <div className="line" style={lineStyle}></div>
        </div>
        <div className="settings">&#x205D;</div>
      </div>
      <NewsContainer category={cate.data} apiKey={apiCode} dataCach={dataCach} AdddataCach={AdddataCach} SetdataCach={SetdataCach}/>
      
        </>
    );
}

export default Newsnav;