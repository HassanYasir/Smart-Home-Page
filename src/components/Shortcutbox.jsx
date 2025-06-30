import PropTypes from 'prop-types'
import '../App.css';
import { useState } from "react";



function Shortcutbox ({link,src,icons,title,disabled,setDilog,setSId,id,deleteShortcut}){
    const [image,setImage] = useState(`${link}icon.ico`);
    const handleEdit = () =>{
        setSId(id);
        setDilog("EDIT");

    }
    const handleDelete = () =>{
        deleteShortcut(id);
    }

    return (
        <div onClick={disabled?()=>{setDilog("CREATE")}:()=>{}} className="shortcut-box ">
            <a className="box-cover" href={!disabled ? link : undefined} target='_blank' >
                <img src={image} alt=""
                onError={() => setImage(src)}/>
            </a>
            <p className="tittle">{title}</p>
            <div className="edit">
                <img src={icons.icons[0]} alt="" className="edit" onClick={handleEdit} />
                <img src={icons.icons[1]} alt="" className="delete" onClick={handleDelete}/>
            </div>
        </div>
    );
}

Shortcutbox.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string,
    tittle: PropTypes.string,
    disabled: PropTypes.bool
    
  }

export default Shortcutbox;
