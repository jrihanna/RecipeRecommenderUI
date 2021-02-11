import React from 'react';
import useReactRouter from 'use-react-router';
import { Switch, Route } from "react-router-dom";
import { useBusinessSearch } from '../../base/api/useBusinessSearch';
import RecipeList from './recipe/recipeList';
import RecipeGroup from './recipe/group/recipeGroup';
import './content.css';

function MainContent(props) {
  function Home() {
    return <h2>Home</h2>;
  }

  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const recipeName = params.get('recipeName');
  const ingredients = params.get('ingredients');
  const tags = params.get('tags');
  const [recipes, searchParams, setSearchParams] = useBusinessSearch(recipeName, ingredients, tags);

  console.log(recipes);
  return (
    <div className="">
      <Switch>
        <Route path="/Recipes">
          <RecipeList recipes={recipes} />
        </Route>
        <Route path="/search">
          <RecipeList recipes={recipes} />
        </Route>
        <Route path="/SearchGroup">
          <RecipeGroup recipes={recipes}/>
        </Route>
        <Route path="/SearchSingle">
          <RecipeList recipes={recipes} />
        </Route>
        <Route path="/Ingredients">
          <Home />
        </Route>
        <Route path="/About">
          <Home />
        </Route>
      </Switch>
      {props.children}
    </div>
  );
}

export default MainContent;
