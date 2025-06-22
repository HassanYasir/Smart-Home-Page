import "../App.css";
import edit from "../assets/edit.png";
import remove from "../assets/delete.png";
import Shortcutbox from "./Shortcutbox";
import { useState } from "react";


function ShortCutcont() {
  const getDomainUrl = (url) => {
    const parsedUrl = new URL(url);
    const domain = parsedUrl.origin.replace("https://","").replace("http://","").replace("www.","");
    return domain;
  };
  const shortcuts = [{link:"https://www.youtube.com/",title:"Youtube"},
    {link:"https://github.com/",title:"Github"},
    {link:"https://mail.google.com/",title:"Gmail"},
    {link:"https://www.linkedin.com/",title:"Linkedin"},
    {link:"https://chatgpt.com/",title:"Chatgpt"},
    {link:"https://hassanyasir.github.io/Web-Snake-Game/",title:"SnakeGame"}
  ];
  return (
    <div id="stortcuts-container">
      <div id="stortcuts-box-container">
        {shortcuts.map((elem)=>{
            return(
                <Shortcutbox key={elem.link}
                link={elem.link}
                src={`https://icons.duckduckgo.com/ip3/${getDomainUrl(elem.link)}.ico`}
                onError={() => setImageErr(true)}
                icons={{icons: [edit, remove]}}
                title={elem.title}
                />
            );
        })}

      </div>
    </div>
  );
}

export default ShortCutcont;
