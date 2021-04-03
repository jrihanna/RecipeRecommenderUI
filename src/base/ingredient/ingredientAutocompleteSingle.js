import React from 'react';
import Autosuggest from 'react-autosuggest';
import * as api from '../api/api';
import { INGREDIENT_AUTOCOMPLETE } from '../api/config';
import './ingredientAutocomplete.css';


function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class IngredientAutoCompleteSingle extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      selectedIngredient: '',
      selectedIngredientName: ''
    };

    this.lastRequestId = null;
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value, reason }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (reason === 'input-changed') {
      if (inputLength > 0) {
        const data = { 'ingName': inputValue }
        api.get(INGREDIENT_AUTOCOMPLETE, data, true)
          .then(response => response.json())
          .then(data => {
            if (data === null || data.length === 0) {
              const selectedIngredient = { name: inputValue, nutritionalValue: {} }
              this.props.handleIngredientChange(selectedIngredient);
            }
            else
              this.setState({ suggestions: data })
          })
      }
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: ''
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.setState({ selectedIngredient: suggestion });
    this.props.handleIngredientChange(suggestion);
  }


  render() {
    const { value, suggestions, selectedIngredients } = this.state;
    const inputProps = {
      placeholder: "",
      value,
      onChange: this.onChange,
      required: this.props.required
    };

    return (
      <div>
        <div>
          <Autosuggest
            id={this.props.compId + "-autocomplete"}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={this.onSuggestionSelected}
            inputProps={inputProps} />
        </div>
        <div className="autocomplete-selected-ingredients-container">
          {selectedIngredients}
        </div>
      </div>
    );
  }
}

export default IngredientAutoCompleteSingle;