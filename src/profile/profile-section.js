import './profile.css';
import pic from '../img/profile.png'

function ProfileSection(props) {

  const isLogggedIn = true;//props.isLoggedIn;
  if (isLogggedIn) {
    return (
      <div className="profile-main">
        <img src={pic} className="profile-img" alt="logo" />
        <div className="logout-link"><a href="">Log out</a></div>
        
        {/* <div className="profile-name">your name</div> */}
      </div>
    );
  }
  else {
    return (
      <div className="profile-main not-logged">
        <span className="logged-span">
        <a href="" onClick="return false;">Login</a>
        </span>
        <span className="logged-span">
        <a href="" onClick="return false;">Sign up</a>
        </span>
      </div>
    );
  }
}

export default ProfileSection;
