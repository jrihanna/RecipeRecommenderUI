import './profile.css';
import pic from '../img/profile.png'

function ProfileSection(props) {
  return (
    <div className="profile-main">
        {/* <section> */}
            <img src={pic} className="profile-img" alt="logo" /> 
            <div className="profile-name">your name</div>
        {/* </section> */}
        {props.children}
    </div>
  );
}

export default ProfileSection;
