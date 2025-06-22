import PropTypes from 'prop-types'
import '../App.css';
import { useState } from "react";



function Shortcutbox ({link,src,icons,title}){
    const [image,setImage] = useState(`${link}icon.ico`);
    return (
        <a href={link} className="shortcut-box " target='_blank'>
            <div className="box-cover">
                <img src={image} alt=""
                onError={() => setImage(src)}/>
            </div>
            <p className="tittle">{title}</p>
            <div className="edit">
                <img src={icons.icons[0]} alt="" className="edit" />
                <img src={icons.icons[1]} alt="" className="delete" />
            </div>
        </a>
    );
}

Shortcutbox.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string,
    tittle: PropTypes.string
    
  }

export default Shortcutbox;
