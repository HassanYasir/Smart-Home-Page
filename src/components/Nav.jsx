import settings from "../assets/settings.svg";
import '../App.css';





function Nav({toggleSetting}) {


  return (
    <>
    <div className="home-nav">
        <div className="right">
            <div className="items"><img src={settings} alt="" onClick={toggleSetting}/></div>
        </div>
    </div>
    </>
  )
}

export default Nav;