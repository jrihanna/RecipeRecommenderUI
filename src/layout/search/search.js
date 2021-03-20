import React from "react";
import { useState } from 'react';
// import useReactRouter from 'use-react-router';
import Collapsible from 'react-collapsible';
import Nutrition from '../../base/nutrition';
import TagContainer from '../../base/tag/tagContainer';
import './search.css';

function Search(props) {
  const [singleListSearch, setSingleListSearch] = useState({
    recipeName: '', includedIngredients: [],
    excludedIngredients: [], tags: [],
    minCalory: 0, maxCalory: 0, minCarb: 0, maxCarb: 0, minFat: 0, maxFat: 0,
    category: ""
  });
  const [groupSearch, setGroupSearch] = useState({ numWeeks: 1, 
    excludedIngredients: [], 
    tags: [],
    minCalory: 0, maxCalory: 0, minCarb: 0, maxCarb: 0, minFat: 0, maxFat: 0,
  });


  function setGroupSearchNutritionalValues(params) {
    setGroupSearch({ ...groupSearch, 
      minCalory: params.minCalory, maxCalory: params.maxCalory, 
      minCarb: params.minCarb, maxCarb: params.maxCarb, 
      minFat: params.minFat, maxFat: params.maxFat  });
  }
  function setListSearchNutritionalValues(params) {
    setSingleListSearch({ ...singleListSearch, 
      minCalory: params.minCalory, maxCalory: params.maxCalory, 
      minCarb: params.minCarb, maxCarb: params.maxCarb, 
      minFat: params.minFat, maxFat: params.maxFat });
  }

  function handleListTagClick(selectedTags) {
    setSingleListSearch({ ...singleListSearch, tags: selectedTags })
  }

  function handleGroupTagClick(selectedTags) {
    setGroupSearch({ ...groupSearch, tags: selectedTags })
  }

  function handleSingleSubmit(event) {
    console.log(singleListSearch)
    if (typeof props.search === 'function') {
      props.search(singleListSearch, 'list');
    }
    event.preventDefault();
  }

  function handleGroupSubmit(event) {
    // console.log(groupSearch)
    if (typeof props.search === 'function') {
      props.search(groupSearch, 'group');
    }
    event.preventDefault();
  }

  return (
    <div className="search-container">
      <div>
        <Collapsible trigger="Search single recipe" triggerTagName="div" triggerClassName="search-trigger"
          triggerOpenedClassName="search-trigger search-header-open">
          <div className="search-body-section">
            <form onSubmit={handleSingleSubmit}>
              <div>
                <label>Recipe name:
                  <input type="text" onChange={(event) => setSingleListSearch({ ...singleListSearch, recipeName: event.target.value })} className="search-input search-input-normal-text" name="recipeName" />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Include ingredients:
                    <input type="text" id="ingredient-include-single-input" className="search-input search-input-normal-text"
                    onChange={(event) => setSingleListSearch({ ...singleListSearch, includedIngredients: event.target.value })} />
                </label>
                <div>List of selected Ingredients</div>
              </div>
              <br />
              <div>
                <label>
                  Exclude ingredients:
                    <input type="text" id="ingredient-exclude-single-input" className="search-input search-input-normal-text"
                    onChange={(event) => setSingleListSearch({ ...singleListSearch, excludedIngredients: event.target.value })} />
                </label>
                <div>List of selected Ingredients</div>
              </div>
              <br />
              <div>
                <label>Category:
                    <select id="category-option" className="search-input category-select" onChange={(event) => setSingleListSearch({ ...singleListSearch, category: event.target.value })}>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                  </select>
                </label>
              </div>
              {/* <br /> */}
              <div>
                <Nutrition minMax inputClassName="search-input input-min-max"
                  minCaloryInputId="cal-single-min-input" maxCaloryInputId="cal-single-max-input"
                  minCarbInputId="carb-single-min-input" maxCarbInputId="carb-single-max-input"
                  minFatInputId="fat-single-min-input" maxFatInputId="fat-single-max-input"
                  handleChange={setListSearchNutritionalValues} />
              </div>
              <br />
              <div className="search-tags-container">
                <TagContainer selectable handleTagClick={handleListTagClick} />
              </div>
              <div className="submit-button-container">
                <button type="submit" className="submit-button" id="search-single-submit-button">Search</button>
              </div>
            </form>
          </div>
        </Collapsible>
      </div>
      <div>
        <Collapsible trigger="Make it a plan" triggerTagName="div" triggerClassName="search-trigger"
          triggerOpenedClassName="search-trigger search-header-open" open>
          <div className="search-body-section">
            <form onSubmit={handleGroupSubmit}>
              {/* <br /> */}
              {/* <section>
                <div>
                  <label>How many weeks do you want to plan for?
                    <select id="num-weeks-option" className="search-input num-weeks-select" onChange={(event) => setGroupSearch({ ...groupSearch, numWeeks: event.target.value })}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </label>
                </div>
              </section>
              <br /> */}
              <section>
                {/* <div>
            <label>
              Include ingredients:
                    <input type="text" id="search-input ingredient-include-group-input" />
            </label>
            <div>List of selected Ingredients</div>
            </div>
            <br /> */}
                <div>
                  <label>
                    Exclude ingredients:
                    <input type="text" id="ingredient-exclude-group-input" className="search-input search-input-normal-text" />
                  </label>
                  <div>List of selected Ingredients</div>
                </div>
              </section>
              <br />
              <section>
                <div>
                  <Nutrition minMax inputClassName="search-input input-min-max" handleChange={setGroupSearchNutritionalValues}
                    minCaloryInputId="cal-group-min-input" maxCaloryInputId="cal-group-max-input"
                    minCarbInputId="carb-group-min-input" maxCarbInputId="carb-group-max-input"
                    minFatInputId="fat-group-min-input" maxFatInputId="fat-group-max-input" />
                </div>
              </section>
              <br />
              <section>
                <div className="search-tags-container">
                  <TagContainer selectable handleTagClick={handleGroupTagClick} />
                </div>
              </section>
              <br />
              <div className="submit-button-container">
                <button type="submit" className="submit-button" id="search-group-submit-button">Search</button>
              </div>
            </form>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

export default Search;
