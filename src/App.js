import './App.css';
import Header from './header/header';
import ProfileSection from './profile/profile-section';
import MainContent from './content/content';
import Menu from './header/menu/menu';
import MenuItem from './header/menu/menuItem';
import AdSection from './ad/ad';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './search/search';

function App() {

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  return (
    <div className="App">
      <Router>
        <section className="Header-section">
          <Header>
            <div className="Profile-container">
              <ProfileSection />
            </div>
            <div>
            <Menu>
              <Link to="/Recipes"><MenuItem title="Recipes" /></Link>
              <Link to="/Ingredients"><MenuItem title="Ingredients" /></Link>
              <Link to="/About"><MenuItem title="About" /></Link>
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
            <Switch>
              <Route path="/Recipes">
                <About />
              </Route>
              <Route path="/Ingredients">
                <Home />
              </Route>
              <Route path="/About">
                <Home />
              </Route>
            </Switch>
          </MainContent>
        </section>
        <section className="Add-section">
          <AdSection/>
        </section>

      </Router>
    </div>
  );
}

export default App;
