import React from 'react';
import useReactRouter from 'use-react-router';
import { Switch, Route } from "react-router-dom";
import { useRecipeSearch } from '../../base/api/useBusinessSearch';
import RecipeList from './recipe/recipeList';
import RecipeGroup from './recipe/group/recipeGroup';
import NewRecipe from './recipe/newRecipe/newRecipe';
import Search from '../../layout/search/search';
import { RECIPE_SEARCH_LIST_PATH, RECIPE_SEARCH_GROUP_PATH } from '../../base/api/config';
import './content.css';

function MainContent(props) {
  function Home() {
    return <h2>Home</h2>;
  }
  const { location, history } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const path = decidePath(params);
  const [recipes, searchParams, performSearch] = useRecipeSearch(path, params);


  function search(searchParam, searchMode) {
    console.log(searchMode)
    console.log(searchParam)
    if (searchMode === 'group')
      return searchGroup(searchParam);
    else
      return searchList(searchParam);
  }

  function searchList(searchParam) {
    const encodedRecipeName = encodeURI(searchParam.recipeName);
    const encodedIncludedIngredients = encodeURI(searchParam.includedIngredients);
    const encodedExcludedIngredients = encodeURI(searchParam.excludedIngredients);
    const encodedTags = encodeURI(searchParam.tags);
    const encodedCategory = encodeURI(searchParam.category);
    var searchURL = `/SearchSingle?searchMode=list&recipeName=${encodedRecipeName}&excludedIngredients=${encodedExcludedIngredients}&includedIngredients=${encodedIncludedIngredients}&tags=${encodedTags}&category=${encodedCategory}`;
    for (var a in searchParam.nutritions) {
      searchURL += `&${a}=${searchParam.nutritions[a]}`;
    }
    history.push(searchURL);
    performSearch({ searchParam })
  }

  function searchGroup(searchParam) {
    const encodedNumWeeks = encodeURI(searchParam.numWeeks);
    // const encodedNutritions = encodeURI(searchParam.nutritions);
    const encodedExcludedIngredients = encodeURI(searchParam.excludedIngredients);
    const encodedTags = encodeURI(searchParam.tags);
    var searchURL = `/SearchGroup?searchMode=group&numWeeks=${encodedNumWeeks}&excludedIngredients=${encodedExcludedIngredients}&tags=${encodedTags}`;

    for (var a in searchParam.nutritions) {
      searchURL += `&${a}=${searchParam.nutritions[a]}`;
    }
    history.push(searchURL);
    performSearch({ searchParam });
  }

  function decidePath(urlSearchParams) {
    const searchMode = urlSearchParams.get('searchMode');

    if (searchMode != null) {
      if (searchMode === 'group') {
        return RECIPE_SEARCH_GROUP_PATH
      }
      else
        return RECIPE_SEARCH_LIST_PATH
    }
    else
      return RECIPE_SEARCH_LIST_PATH
  }

  return (
    <div className="">
      <section className="content-search-section">
        <Search search={search} />
      </section>
      <section className="content-content-section">
        <Switch>
          <Route path="/Recipes">
            <RecipeList />
          </Route>
          <Route path="/AddRecipe">
            <NewRecipe />
          </Route>
          <Route path="/SearchGroup">
            <RecipeGroup />
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
      </section>
      {props.children}
    </div>
  );
}

export default MainContent;
