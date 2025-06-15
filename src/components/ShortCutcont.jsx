import '../App.css';
import youtube from "../assets/youtube.png"
import github from "../assets/github.png"
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"
import Shortcutbox from './Shortcutbox';

function ShortCutcont (){
    return (
        <div id="stortcuts-container">
            <div id="stortcuts-box-container">
                <Shortcutbox link="https://www.youtube.com/"  src={youtube} tittle={"Youtube"} />
                <Shortcutbox link="https://github.com/"  src={github} tittle={"Github"} />
                <Shortcutbox link="https://mail.google.com/"  src={gmail} tittle={"Gmail"} />
                <Shortcutbox link="https://www.linkedin.com/"  src={linkedin} tittle={"Linkedin"} />
            </div>
        </div>
    );
}


export default ShortCutcont;