import PropTypes from 'prop-types'
import '../App.css'


function Shortcutbox (props){
    return (
        <a href={props.link} className="shortcut-box " target='_blank'>
            <div className="box-cover">
                <img src={props.src} alt=""/>
            </div>
            <p className="tittle">{props.tittle}</p>
        </a>
    );
}

Shortcutbox.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string,
    tittle: PropTypes.string
    
  }

export default Shortcutbox;
