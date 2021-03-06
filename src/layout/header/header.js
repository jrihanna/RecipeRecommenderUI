import React from "react";
import { Link } from "react-router-dom";
import Menu from './menu/menu';
import MenuItem from './menu/menuItem';
import './header.css';
import Logo from '../../local_img/logo2.png';

function Header(props) {
  return (
    <div className="header-main">
      <div className="logo-container">
        <Link to="/Home"><img src={Logo} className="logo-img" alt="Logo" /></Link>
      </div>
      {/* <div className="Profile-container">
              <ProfileSection />
            </div> */}
      <div className="menu-container">
        <Menu>
          <Link to="/Recipes" className="menu-link"><MenuItem title="Recipes" /></Link>
          <Link to="/AddRecipe" className="menu-link"><MenuItem title="Add your recipe" /></Link>
          {/* <Link to="/Ingredients" className="menu-link"><MenuItem title="Ingredients" /></Link> */}
          <Link to="/About" className="menu-link"><MenuItem title="About" /></Link>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
