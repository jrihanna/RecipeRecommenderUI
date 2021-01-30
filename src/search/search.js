import React from "react";
import Collapsible from 'react-collapsible';
import './search.css';

function Search(props) {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ''
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  function handleChange(event) {
    this.setState({ value: event.target.value });
  }

  function handleSubmit(event) {
    alert('An essay was submitted: ');
    event.preventDefault();
  }

  return (

    <div className="search-container">
      <Collapsible trigger="Search single recipe" className="collapsible-head"
        openedClassName="collapsible-head">
        <form onSubmit={handleSubmit}>
          <section>
            <label>Recipe name:
              <input type="text" value="" onChange={handleChange} className="search-input" />
            </label>
          </section>
          <br />
          <section>
            <div>
            <label>
              Include ingredients:
                    <input type="text" id="ingredient-include-single-input" />
            </label>
            <div>List of selected Ingredients</div>
            </div>
            <div>
            <label>
              Exclued ingredients:
                    <input type="text" id="ingredient-exclude-single-input" />
            </label>
            <div>List of selected Ingredients</div>
            </div>
          </section>
          <br />
          <section>
            <div>
              <label>Calories
              <input type="text" placeholder="Min" className="input-min" id="cal-single-min-input" />
              </label>
              <label>-
              <input type="text" placeholder="Max" className="input-max" id="cal-single-max-input" />
              </label>
            </div>
            <div>
              <label>Carbs
              <input type="text" placeholder="Min" className="input-min" id="carb-single-min-input" />
              </label>
              <label>-
              <input type="text" placeholder="Max" className="input-max" id="carb-single-max-input" />
              </label>
            </div>
            <div>
              <label>Fat
              <input type="text" placeholder="Min" className="input-min" id="fat-single-min-input" />
              </label>
              <label>-
              <input type="text" placeholder="Max" className="input-max" id="fat-single-max-input" />
              </label>
            </div>
          </section>
          <br />
          <section>
            <label>
              Tags:
                    <input type="text" id="tag-single-input" />
            </label>
            <div>List of selected Tags</div>
          </section>
          
          <button type="submit" className="submit-button" id="search-single-submit-button"></button>
        </form>
      </Collapsible>
      <hr />
      <Collapsible trigger="Make it a plan" className="collapsible-head" openedClassName="collapsible-head" open="true">
        <form onSubmit={handleSubmit}>
        <br />
          <section>
            <div>
            <label>How many weeks do you want to plan for?
              <select id="num-weeks-option" className="num-weeks-select">
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
          <div>
            <label>
              Include ingredients:
                    <input type="text" id="ingredient-include-group-input" />
            </label>
            <div>List of selected Ingredients</div>
            </div>
            <br />
            <div>
            <label>
              Exclued ingredients:
                    <input type="text" id="ingredient-exclude-group-input" />
            </label>
            <div>List of selected Ingredients</div>
            </div>
          </section>
          <br />
          <section>
            <div>
              <table>
                <tbody>
                <tr>
                  <td>
                    <label>Calories</label>
                  </td>
                  <td>
                    <input type="text" placeholder="Min" className="input-min" id="cal-group-min-input" />
                  </td>
                  <td>
                    <label>-</label>
                  </td>
                  <td>
                    <input type="text" placeholder="Max" className="input-max" id="cal-group-max-input" />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Carbs</label>
                  </td>
                  <td>
                  <input type="text" placeholder="Min" className="input-min" id="carb-group-min-input" />
                  </td>
                  <td>
                    <label>-</label>
                  </td>
                  <td>
                  <input type="text" placeholder="Max" className="input-max" id="carb-group-max-input" />
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <label>Fat</label>
                  </td>
                  <td>
                  <input type="text" placeholder="Min" className="input-min" id="fat-group-min-input" />
                  </td>
                  <td>
                    <label>-</label>
                  </td>
                  <td>
                  <input type="text" placeholder="Max" className="input-max" id="fat-group-max-input" />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </section>
          <br />
          <section>
            <label>
              Tags:
                    <input type="text" />
            </label>
            <div>List of selected Tags</div>
          </section>
          <br/>
          <div className="submit-button-container">
          <button type="submit" className="submit-button" id="search-group-submit-button"></button>
          </div>
        </form>
      </Collapsible>
    </div>
  );
}

export default Search;