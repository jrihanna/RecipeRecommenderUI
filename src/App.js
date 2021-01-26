import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import ProfileSection from './profile/profile-section';
import Menu from './header/menu/menu';
import MenuItem from './header/menu/menuItem';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  function menuItemClickedParent() {
    alert(324)
  }


  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  return (
    <div className="App">
      <Router>
        <Header>
          <Menu>
            <Link to="/item1"><MenuItem title="item1" /></Link>
            <Link to="/about"><MenuItem title="item2" /></Link>
          </Menu>
        </Header>
        <ProfileSection>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/item1">
              <Home />
            </Route>
          </Switch>
        </ProfileSection>
      </Router>
    </div>
  );
}

export default App;
