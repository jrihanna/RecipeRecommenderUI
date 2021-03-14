import React, { useEffect, useState } from "react";
import Minus from '../../../../local_img/minus24.png';
import './newRecipe.css';

function NewIngredientQuantity(props) {
    const currentId = props.index;
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientAmount, setIngredientAmount] = useState(0);
    const [measurement, setMeasurement] = useState("gr");

    function onRemoveItem() {
        props.onRemoveIngredient(currentId);
    }

    useEffect(() => {
        if(typeof props.updateIngredient === 'function')
            props.updateIngredient(currentId, ingredientName, ingredientAmount, measurement)
    },[currentId, ingredientName, setIngredientName, ingredientAmount, setIngredientAmount, measurement, setMeasurement]);

    return (
        <div className="new-recipe-ingredient-container">
            <input type="text" className="new-recipe-input new-recipe-input-text" required
                onChange={(event)=> setIngredientName(event.target.value)} placeholder="Name"/>
            <input type="number" className="new-recipe-input new-recipe-input-number" required
                min="1"
                onChange={(event) => setIngredientAmount(event.target.value)} placeholder="Quantity"/>
            <select id="category-option" className="new-recipe-input new-recipe-select" required
                onChange={(event) => setMeasurement(event.target.value)}>
                <option>gr</option>
                <option>tbsp</option>
                <option>tsp</option>
                <option></option>
            </select>
            <img src={Minus} alt="remove" className="new-recipe-ingredient-remove-img" onClick={onRemoveItem}/>
        </div>
    );
}

export default NewIngredientQuantity;
