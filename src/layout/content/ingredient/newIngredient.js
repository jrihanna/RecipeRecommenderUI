import React, { useState, useEffect } from "react";
import './newIngredient.css';

function NewIngredient(props) {
    const [ingredientName, setIngredientName] = useState("");
    const [measurement, setMeasurement] = useState("");
    const [calories, setCalories] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");
    const [protein, setProtein] = useState("");

    return (
        <div>
            <form method="POST">
                <div className="new-ingredient-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Ingredient name:</label>
                                </td>
                                <td>
                                    <input type="text" className="new-ingredient-input new-ingredient-input-normal-text"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Measurement type:</label>
                                </td>
                                <td>
                                    <select id="category-option" className="new-ingredient-input measurement-type-select" onChange={(event) => setSingleListSearch({ ...singleListSearch, category: event.target.value })}>
                                        <option>gr</option>
                                        <option>tbsp</option>
                                        <option>each</option>
                                    </select>
                                </td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr>
                                <td colSpan="2">
                                    Nutritions per measurement:
                                </td>
                            </tr>
                            <tr>
                                <td>Calories:</td>
                                <td>
                                    <input type="number" className="new-ingredient-input new-ingredient-input-normal-number"
                                        onChange={(event) => setNutritionValues({...nutritionValues, minCalory: event.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <td>Carbs:</td>
                                <td>
                                    <input type="number" className="new-ingredient-input new-ingredient-input-normal-number"
                                        onChange={(event) => setNutritionValues({...nutritionValues, minCalory: event.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <td>Fat:</td>
                                <td>
                                    <input type="number" className="new-ingredient-input new-ingredient-input-normal-number"
                                        onChange={(event) => setNutritionValues({...nutritionValues, minCalory: event.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <td>Protein:</td>
                                <td>
                                    <input type="number" className="new-ingredient-input new-ingredient-input-normal-number"
                                        onChange={(event) => setNutritionValues({...nutritionValues, minCalory: event.target.value})} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <div className="new-ingredient-button-container">
                        <button className="new-ingredient-button new-ingredient-submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewIngredient;
