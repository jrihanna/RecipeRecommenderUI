 import './ad.css';
import ad_icon from '../../local_img/advertising_icon.svg'

function AdSection(props) {
  return (
    <div className="ad-main">
        <img src={ad_icon} alt="logo" /> 
        {props.children}
    </div>
  );
}

export default AdSection;
