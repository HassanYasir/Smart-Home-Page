
import "../App.css";
import { useState,useEffect} from "react";

const ShortcutDialog = ({addShortcut,updateShortcut,dilogState,Id,setDilog,shortcutLimit }) => {
  const [inpName, setInpName] = useState("");
  const [inpLink, setInpLink] = useState("");
  
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  useEffect(()=>{
    console.log(dilogState,Id);
  },[dilogState]);




  const saveShortcut = () => {

    if(!isValidUrl(inpLink)){
      setInpLink("please enter a valid link");
    }else{
      if(dilogState === "CREATE"){
        
        addShortcut({title:inpName,link:inpLink});
        setDilog(false);

      }else if(dilogState === "EDIT"){
        updateShortcut(Id,{title:inpName,link:inpLink});
        setDilog(false);

      }

    }
  };

  const handleCancel = () => {
    setInpLink("");
    setInpName("");
    setDilog(false);

  };
  return (
    <>
      <div className="screen-dialog">
      <div className="dialog">
        {!shortcutLimit?
        <>
        <h2 className="dialog-heading">Edit shortcut</h2>
        <div className="dialog-input-cont">
          <input
            type="text"
            onChange={(e) => setInpLink(e.target.value)}
            value={inpLink}
            required
          />
          <div className="label l-1">Link</div>
        </div>
        <div className="dialog-input-cont">
          <input
            type="text"
            onChange={(e) => setInpName(e.target.value)}
            value={inpName}
            required
          />
          <div className="label l-2">Name</div>
        </div>
        </>:<h2 className="dialog-heading">Sorry you can't add more</h2> }

        <div className="btn-cont">
          <button className="dialog-btn-C" onClick={handleCancel}>
            Cancel
          </button>
          <button className="dialog-btn-S" onClick={!shortcutLimit?saveShortcut:()=>{setDilog(false)}} >
            Save
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default ShortcutDialog;
