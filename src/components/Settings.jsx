import { useEffect, useState } from 'react';
import '../App.css';
import settings from "../assets/settings.svg";
import Slider from './Slider';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, deleteCategory } from '../store/categorySlice';
import { changeColor } from '../store/colorSlice';




function Settings({toggleSetting}) {
  const [category,setCategory] = useState("");
  const [categoryMessage,setCategoryMessage] = useState(false);
  const categorys = useSelector((state) => state.category); // read from store
  const mainColor = useSelector((state) => state.color); 
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const colorArr = ["color-1","color-2","color-3","color-4"];


  const keyHandler = (e)=>{
    if(e.key === "Enter"){
      dispatch(addCategory(category));
      setCategory(""); // Clear input on success
    }
  }

  useEffect(()=>{
    if(mainColor === "rgb(0, 132, 247)"){
      setSelected(0);
    }
    else if(mainColor === "rgb(20, 184, 166)"){
      setSelected(1);
    }
    else if(mainColor === "rgb(76, 175, 80)"){
      setSelected(2);
    }
    else if(mainColor === "rgb(245, 158, 11)"){
      setSelected(3);
    }
  })

  useEffect(()=>{
    if(categorys.length  < 7){
      setCategoryMessage(false);
    }else{
      setCategoryMessage(true);
    }
  },[categorys])
  useEffect(()=>{
    setSelected(0);
  },[]);
  useEffect(()=>{
    document.documentElement.style.setProperty('--main-color',mainColor);
  },[mainColor])

  function TagDelete({index}){
    const elemStyle ={
      width:"0.7rem",
      backgroundColor:"var(--bg-dark-4)",
      borderRadius:"18px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      width:"0.9rem",
      height:"0.9rem",
      padding:"3px 3px",
      marginLeft:"auto"
    }
    function deleteTaghandler(){
      dispatch(deleteCategory(index));
    }
    return (
      <div className="cross" style={elemStyle} onClick={deleteTaghandler}>&#x2715;</div>
    );
  }

  return (
    <>
    <div className="screen-dialog">
      <div className="setting-dialog">
        <div className="settings-headings center"><img src={settings} alt="" /> <h2>Settings</h2></div>
        <div className="category">
          <div className="category-inp">
          <div className="category-input-cont">
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value.toLowerCase())}
            value={category}
            onKeyDown={categorys.length<7?keyHandler:()=>{}}
            required
          />
          <div className="label">category</div>
          <div className="cancel" onClick={()=>{setCategory("")}}><div className="cross">&#x2715;</div></div>
          </div>
          </div>
          <div className="tags-cont">
            {categorys.length !== 0?categorys.map((elem,index)=>{
              return(
                <div className="tag" key={index}>{elem} <TagDelete index={index}/></div>
              );
            }):<div className="tag">add a category</div>}
            {categoryMessage && <div className="tag">reached limit</div>}
          </div>
          
        </div>
        <div className="settings-headings center"><h3>Set page size</h3></div>
        <Slider />
        <div className="select-colors">
          <h3>set color:</h3>
          <div className="colors">
            {colorArr.map((item,index)=>{
              return (<div key={index} className={`${item} color ${selected === index?"border-selection":""}`}
              onClick={(e)=>{setSelected(index);
                const color = window.getComputedStyle(e.target).getPropertyValue('background-color');
                console.log(color);
                dispatch(changeColor(color));
                }}></div>);
            })}

          </div>
        </div>
        <div className="btn-cont">
          <button className="dialog-btn-C" onClick={toggleSetting}>
            Cancel
          </button>
          <button className="dialog-btn-S" onClick={toggleSetting}>
            Save
          </button>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Settings;