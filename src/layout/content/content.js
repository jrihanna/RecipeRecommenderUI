import React from 'react';
import useReactRouter from 'use-react-router';
import { Switch, Route } from "react-router-dom";
import { useBusinessSearch } from '../../base/api/useBusinessSearch';
import RecipeList from './recipe/recipeList';
import RecipeGroup from './recipe/group/recipeGroup';
import Search from '../../layout/search/search';
import {RECIPE_SEARCH_LIST_PATH, RECIPE_SEARCH_GROUP_PATH} from '../../base/api/config';
import queryString from 'query-string';
import './content.css';

function MainContent(props) {
  function Home() {
    return <h2>Home</h2>;
  }
  const { location, history } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const path = decidePath(params);
  const [recipes, searchParams, performSearch] = useBusinessSearch(path, params);
  

  function search(searchParam, searchMode) {
    console.log(searchMode)
    if(searchMode === 'group')
      return searchGroup(searchParam);
    else
      return searchList(searchParam);
  }

  function searchList(searchParam) {
    const encodedRecipeName = encodeURI(searchParam.recipeName);
    const encodedIncludedIngredients = encodeURI(searchParam.includedIngredients);
    const encodedExcludedIngredients = encodeURI(searchParam.excludedIngredients);
    const encodedTags = encodeURI(searchParam.tags);
    history.push(`/SearchSingle?searchMode=list&recipeName=${encodedRecipeName}&excludedIngredients=${encodedExcludedIngredients}&includedIngredients=${encodedIncludedIngredients}&tags=${encodedTags}`);
    performSearch({searchParam})
  }

  function searchGroup(searchParam) {
    const encodedNumWeeks = encodeURI(searchParam.numWeeks);
    const encodedIncludedIngredients = encodeURI(searchParam.includedIngredients);
    const encodedExcludedIngredients = encodeURI(searchParam.excludedIngredients);
    const encodedTags = encodeURI(searchParam.tags);
    history.push(`/SearchGroup?searchMode=group&numWeeks=${encodedNumWeeks}&includedIngredients=${encodedIncludedIngredients}&tags=${encodedTags}`);
    performSearch({searchParam})
  }

  function decidePath(urlSearchParams){
    const searchMode = urlSearchParams.get('searchMode');

    if(searchMode != null) {
      if(searchMode == 'group') {
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
        <Search search={search}/>
      </section>
      <section className="content-content-section">
      <Switch>
        <Route path="/Recipes">
          <RecipeList/>
        </Route>
        <Route path="/SearchGroup">
          <RecipeGroup/>
        </Route>
        <Route path="/SearchSingle">
          <RecipeList recipes={recipes}/>
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
