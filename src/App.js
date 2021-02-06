import './App.css';
import Header from './layout/header/header';
import ProfileSection from './profile/profile-section';
import MainContent from './layout/content/content';
import RecipeList from './layout/content/recipe/recipeList';
import Menu from './layout/header/menu/menu';
import MenuItem from './layout/header/menu/menuItem';
import AdSection from './layout/ad/ad';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import Search from './layout/search/search';

import Logo from './img/logo2.png';
import RecipeGroup from './layout/content/recipe/group/recipeGroup';

function App() {

  const {history} = useReactRouter();

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  
  function handleSubmit(event) {
    // return <Redirect to="/SearchGroup" />
    history.push('/SearchGroup');
    event.preventDefault();
  }

  return (
    <div className="App">
      <Router>
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
          <Search onSubmit={handleSubmit}/>
        </section>

        <section className="Content-section">

          <MainContent>
            <Switch>
              <Route path="/Recipes">
                {/* <AdSection/> */}
                <RecipeList recipes={[{ 'id': '1', 'recipeName': 'Name1', 'img': './img/pizza1.jpg' },
                { 'id': '2', 'recipeName': 'Name2', 'img': './img/pizza1.jpg' },
                { 'id': '3', 'recipeName': 'Name3', 'img': './img/pizza1.jpg' },
                { 'id': '4', 'recipeName': 'Name4', 'img': './img/pizza1.jpg' }]} />
              </Route>
              <Route path="/SearchGroup">
                <RecipeGroup />
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
          <AdSection />
        </section>

      </Router>
    </div>
  );
}

export default App;
