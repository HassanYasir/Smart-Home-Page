import "../App.css";
import edit from "../assets/edit.png";
import remove from "../assets/delete.png";
import add from "../assets/add.svg";
import Shortcutbox from "./Shortcutbox";
import ShortcutDialog from "./ShortcutDialog";
import useShortcut from "./customHooks/useShortcut";
import {useState} from 'react'



function ShortCutcont() {
  const getDomainUrl = (url) => {
    const parsedUrl = new URL(url);
    const domain = parsedUrl.origin.replace("https://","").replace("http://","").replace("www.","");
    return domain;
  };


  // const [editing,setEditing] = useState(false); 
  const [dilogState,setDilog] = useState(false); 
  const [sId,setSId] = useState(); 


  const [shortcuts, addShortcut,updateShortcut,deleteShortcut] = useShortcut(); 



  return (
    <div id="stortcuts-container">
      <div id="stortcuts-box-container">
        {shortcuts.length !== 0?shortcuts.map((elem)=>{
            return(
              <Shortcutbox key={elem.link}
              link={elem.link}
              src={`https://icons.duckduckgo.com/ip3/${getDomainUrl(elem.link)}.ico`}
              icons={{icons: [edit, remove]}}
              title={elem.title}
              setDilog={setDilog}
              setSId={setSId}
              id={elem.id}
              deleteShortcut={deleteShortcut}
              />
            );
          }):
          <Shortcutbox
          link={""}
          src={"https://www.iconarchive.com/download/i103430/paomedia/small-n-flat/house.1024.png"}
          icons={{icons: ["", ""]}}
          title={"Empty"}
          disabled={true}
          setDilog={setDilog}
          /> 
        
        }
        <Shortcutbox
          
          link={""}
          src={add}
          icons={{icons: ["", ""]}}
          title={"Add shortcut"}
          disabled={true}
          setDilog={setDilog}
        /> 

      </div>
      {dilogState && <ShortcutDialog addShortcut={addShortcut} updateShortcut={updateShortcut} dilogState={dilogState} Id={sId} setDilog={setDilog}/>}
      
      
    </div>

  );
}

export default ShortCutcont;
