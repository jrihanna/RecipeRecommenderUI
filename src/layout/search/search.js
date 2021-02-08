import React from "react";
import useReactRouter from 'use-react-router';
import Collapsible from 'react-collapsible';
import Nutrition from '../../base/nutrition';
import './search.css';

function Search(props) {
  const { history } = useReactRouter();

  function handleChange(event) {
    this.setState({ value: event.target.value });
  }

  function handleSingleSubmit(event) {
    history.push('/SearchSingle');
    event.preventDefault();
  }

  function handleGroupSubmit(event) {
    history.push('/SearchGroup');
    event.preventDefault();
  }

  return (
    <div className="search-container">
      <div>
        <Collapsible trigger="Search single recipe" triggerTagName="div" triggerClassName="search-trigger"
          triggerOpenedClassName="search-trigger search-header-open">
          <div className="search-body-section">
            <form onSubmit={handleSingleSubmit}>
              <section>
                <label>Recipe name:
                  <input type="text" value="" onChange={handleChange} className="search-input search-input-normal-text" />
                </label>
              </section>
              <br />
              <section>
                <div>
                  <label>
                    Include ingredients:
                    <input type="text" id="ingredient-include-single-input" className="search-input search-input-normal-text" />
                  </label>
                  <div>List of selected Ingredients</div>
                </div>
                <br />
                <div>
                  <label>
                    Exclude ingredients:
                    <input type="text" id="ingredient-exclude-single-input" className="search-input search-input-normal-text" />
                  </label>
                  <div>List of selected Ingredients</div>
                </div>
              </section>
              <br />
              <section>
                <div>
                  <Nutrition minMax inputClassName="search-input input-min-max"
                    minCaloryInputId="cal-single-min-input" maxCaloryInputId="cal-single-max-input"
                    minCarbInputId="carb-single-min-input" maxCarbInputId="carb-single-max-input"
                    minFatInputId="fat-single-min-input" maxFatInputId="fat-single-max-input" />
                </div>
              </section>
              <br />
              <section>
                <label>
                  Tags:
                    <input type="text" id="tag-single-input" className="search-input search-input-normal-text" />
                </label>
                <div>List of selected Tags</div>
              </section>
              <br />
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
              <br />
              <section>
                <div>
                  <label>How many weeks do you want to plan for?
                    <select id="num-weeks-option" className="search-input num-weeks-select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </label>
                </div>
              </section>
              <br />
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
                  <Nutrition minMax inputClassName="search-input input-min-max"
                    minCaloryInputId="cal-group-min-input" maxCaloryInputId="cal-group-max-input"
                    minCarbInputId="carb-group-min-input" maxCarbInputId="carb-group-max-input"
                    minFatInputId="fat-group-min-input" maxFatInputId="fat-group-max-input" />
                </div>
              </section>
              <br />
              <section>
                <label>
                  Tags:
                    <input type="text" className="search-input search-input-normal-text" />
                </label>
                <div>List of selected Tags</div>
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
