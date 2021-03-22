import React from 'react';
import Autosuggest from 'react-autosuggest';
import * as api from '../../base/api/api';
import {INGREDIENT_AUTOCOMPLETE} from '../../base/api/config';
import './ingredientAutocomplete.css';


function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class IngredientAutoComplete extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      isLoading: false
    };
    
    this.lastRequestId = null;
  }
  
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
    
  onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if(inputLength > 0) {
      const data = { 'ingName': inputValue }
      api.get(INGREDIENT_AUTOCOMPLETE, data, true)
        .then(response => response.json())
        .then(data => this.setState({ suggestions: data }))
    };
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    console.log(suggestion)
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "",
      value,
      onChange: this.onChange
    };
    
    return (
      <div>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps} />
      </div>
    );
  }
}

export default IngredientAutoComplete;