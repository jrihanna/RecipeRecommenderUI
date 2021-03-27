import React from 'react';
import './ingredientAutocomplete.css';

function SelectedIngredient(props) {

    return (
        <div className="selected-ingredient-container">
            <span>{props.ingredient.name}</span>
            <span className="selected-ingredient-close-span-containter">
                <span className="selected-ingredient-close-span" onClick={props.removeIngredient}>x</span>
                {/* <span>&nbsp;</span> */}
            </span>
        </div>
    );
}

export default SelectedIngredient;
