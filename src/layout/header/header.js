import React from "react";
import { Link } from "react-router-dom";
import Menu from './menu/menu';
import MenuItem from './menu/menuItem';
import './header.css';
import Logo from '../../local_img/logo2.png';
import ProfileSection from "../../profile/profile-section";

function Header(props) {
  return (
    <div className="header-main">
      <div className="logo-container">
        <Link to="/Home"><img src={Logo} className="logo-img" alt="Logo" /></Link>
      </div>
      <div className="header-menu-container">
        <Menu>
          <Link to="/AddRecipe" className="menu-link"><MenuItem title="Add your recipe" /></Link>
          <Link to="/AddIngredient" className="menu-link"><MenuItem title="Add an ingredient" /></Link>
          <Link to="/About" className="menu-link"><MenuItem title="About" /></Link>
        </Menu>
      </div>
      <div className="header-profile-container">
        <ProfileSection />
      </div>
    </div>
  );
}

export default Header;
