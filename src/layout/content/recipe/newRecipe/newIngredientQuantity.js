import React from "react";
import Minus from '../../../../local_img/minus24.png';
import './newRecipe.css';

function NewIngredientQuantity(props) {
    const currentId = props.index;

    function onRemoveItem() {
        props.onRemoveIngredient(currentId);
    }

    return (
        <div className="new-recipe-ingredient-container">
            <input type="text" className="new-recipe-input new-recipe-input-text" placeholder={currentId}/>
            <input type="text" className="new-recipe-input new-recipe-input-text" placeholder="Quantity"/>
            <select id="category-option" className="new-recipe-input new-recipe-select">
                <option>Grams</option>
                <option>Tablespoon</option>
                <option>Teaspoon</option>
                <option>Each</option>
            </select>
            <img src={Minus} alt="remove" className="new-recipe-ingredient-remove-img" onClick={onRemoveItem}/>
        </div>
    );
}

export default NewIngredientQuantity;
