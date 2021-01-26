import './profile.css';
import pic from '../img/profile.png'

function ProfileSection() {
  return (
    <div className="profile-main">
        {/* <section> */}
            <img src={pic} className="profile-img" alt="logo" /> 
            <div className="profile-name">your name</div>
        {/* </section> */}
        
    </div>
  );
}

export default ProfileSection;
