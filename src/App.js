import './App.css';
import Header from './layout/header/header';
import ProfileSection from './profile/profile-section';
import MainContent from './layout/content/content';
import Menu from './layout/header/menu/menu';
import MenuItem from './layout/header/menu/menuItem';
import AdSection from './layout/ad/ad';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Search from './layout/search/search';

import Logo from './img/logo2.png';
import Footer from './layout/footer/footer';

function App() {

 

  
  // function handleSubmit(event) {
  //   // return <Redirect to="/SearchGroup" />
  //   history.push('/SearchGroup');
  //   event.preventDefault();
  // }

  return (
    <div className="App">
      {/* <Router> */}
        <section className="Header-section">
          <Header>
            <div className="logo-container">
              <Link to="/Home"><img src={Logo} className="logo-img" /></Link>
            </div>
            {/* <div className="Profile-container">
              <ProfileSection />
            </div> */}
            <div className="menu-container">
              <Menu>
                <Link to="/Recipes" className="menu-link"><MenuItem title="Recipes" /></Link>
                {/* <Link to="/Ingredients" className="menu-link"><MenuItem title="Ingredients" /></Link> */}
                <Link to="/About" className="menu-link"><MenuItem title="About" /></Link>
              </Menu>
            </div>
          </Header>
        </section>

        {/* <section className="Profile-section">
          <ProfileSection>
          </ProfileSection>
        </section> */}

        <section className="Search-section">
          <Search />
        </section>

        <section className="Content-section">

          <MainContent>
            
          </MainContent>
        </section>
        <section className="Add-section">
          <AdSection />
        </section>

        {/* <section>
          <Footer/>
        </section>
      </Router> */}
    </div>
  );
}

export default App;
