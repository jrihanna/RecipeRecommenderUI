import React from 'react';
import Autosuggest from 'react-autosuggest';
import SelectedIngredient from './selectedIngredient';
import * as api from '../api/api';
import {INGREDIENT_AUTOCOMPLETE} from '../api/config';
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
      selectedIngredients: [],
      selectedIngredientNames: []
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

    if(reason === 'input-changed'){
      if(inputLength > 0) {
        const data = { 'ingName': inputValue }
        api.get(INGREDIENT_AUTOCOMPLETE, data, true)
          .then(response => response.json())
          .then(data => this.setState({ suggestions: data }))
      }
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    let currentIngredients = this.state.selectedIngredients;
    const index = currentIngredients.length + 1;
    currentIngredients.push(<SelectedIngredient key={this.props.compId + "selected-ingredient" + index} 
              ingredient={suggestion} removeIngredient={(event)=>this.onRemoveIngredient(event, index)} />);
    this.setState({selectedIngredients: currentIngredients});
    this.setState({
      suggestions: [],
      value: ''
    });
    let currentIngredientNames = this.state.selectedIngredientNames;
    currentIngredientNames.push(suggestion.name);
    this.setState({selectedIngredientNames: currentIngredientNames});
    this.props.handleIngredientChange(currentIngredientNames);
    
  }

  onRemoveIngredient = (event, ingredientIndex) => {
    const newList = this.state.selectedIngredients.splice(ingredientIndex, 1);
    const newNameList = this.state.selectedIngredientNames.splice(ingredientIndex, 1);
    this.setState({selectedIngredients: newList});
    this.setState({selectedIngredientNames: newNameList});
    this.props.handleIngredientChange(newNameList);
  }

  render() {
    const { value, suggestions,selectedIngredients } = this.state;
    const inputProps = {
      placeholder: "",
      value,
      onChange: this.onChange
    };
    
    return (
      <div>
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
        <div className="autocomplete-selected-ingredients-container">
          {selectedIngredients}
        </div>
      </div>
    );
  }
}

export default IngredientAutoComplete;