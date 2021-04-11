import './profile.css';
import { useAuth0 } from "@auth0/auth0-react";
import pic from '../local_img/profile.png'

function ProfileSection(props) {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  if (isAuthenticated ) {
    return (
      <div className="profile-main">
        <img src={user.picture} className="profile-img" alt="logo" />
        <button onClick={() => logout()} className="profile-button">Logout</button></div>
        
    );
  }
  else {
    return (
      <div className="profile-not-logged-main">
        <button onClick={() => loginWithRedirect()} className="profile-button">Login</button>
      </div>
    );
  }
}

export default ProfileSection;
