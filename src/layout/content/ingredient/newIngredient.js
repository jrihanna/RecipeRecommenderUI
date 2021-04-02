import React, { useState } from "react";
import * as api from '../../../base/api/api';
import {INGREDIENT_ADD_PATH} from '../../../base/api/config';
import IngredientAutoCompleteSingle from "../../../base/ingredient/ingredientAutocompleteSingle";
import './newIngredient.css';

function NewIngredient(props) {
    const [ingredientName, setIngredientName] = useState("");
    const [measurement, setMeasurement] = useState("gr");
    const [category, setCategory] = useState("");
    const [calories, setCalories] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");
    const [protein, setProtein] = useState("");

    function submitNewIngredient(event) {
        const fetchData = async () => {
            try {
                const data = {name:ingredientName, measurement, nutritionalValue: {calory:calories, carbs, fat, protein}}
                const rawData = await api.post(INGREDIENT_ADD_PATH, data);
                const resp = await rawData.json();
                console.log(resp)
            }
            catch(e) {
                console.log(e);
            }
        };
        fetchData();
        // if(typeof props.submitNewRecipe === 'function')
        //     props.submitNewRecipe(recipeName, ingredientsList);
        event.preventDefault();
    }

    function handleIncludeIngredientList(selectedIngredient) {
        setIngredientName(selectedIngredient.name);
        setMeasurement(selectedIngredient.measurement);
        setCalories(selectedIngredient.nutritionalValue.calory);
        setCarbs(selectedIngredient.nutritionalValue.carbs);
        setFat(selectedIngredient.nutritionalValue.fat);
        setProtein(selectedIngredient.nutritionalValue.protein);
    }

    return (
        <div>
            <form method="POST" onSubmit={submitNewIngredient}>
                <div className="new-ingredient-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Ingredient name:</label>
                                </td>
                                <td>
                                <IngredientAutoCompleteSingle compId="list-include" onChange={(e) => setIngredientName(e.target.value)} handleIngredientChange={handleIncludeIngredientList}/>
                                    {/* <input type="text" className="new-ingredient-input new-ingredient-input-normal-text"
                                        required onChange={(e) => setIngredientName(e.target.value)}/> */}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Category:</label>
                                </td>
                                <td>
                                    <select id="category-option" value={category === null ? 'Fruits' : category}
                                        onChange={(e) => setCategory(e.target.value)} className="new-ingredient-input new-ingredient-select" onChange={(event) => setMeasurement(event.target.value)}>
                                        <option>Fruits</option>
                                        <option>Grain, nuts and baking products</option>
                                        <option>Herbs and spices</option>
                                        <option>Meat, sausages and fish</option>
                                        <option>Pasta, rice and pulses</option>
                                        <option>Vegetables</option>
                                        <option>Eggs, milk and milk products</option>
                                        <option>Fats and oils</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Measurement type:</label>
                                </td>
                                <td>
                                    <select id="measurement-option" value={measurement === null ? 'gr' : measurement}
                                        onChange={(e) => setMeasurement(e.target.value)} className="new-ingredient-input new-ingredient-select" onChange={(event) => setMeasurement(event.target.value)}>
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
                                        value={calories} step=".01" onChange={(event) => setCalories(event.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Carbs:</td>
                                <td>
                                    <input type="number" className="new-ingredient-input new-ingredient-input-normal-number"
                                        value={carbs} step=".01" onChange={(event) => setCarbs(event.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Fat:</td>
                                <td>
                                    <input type="number" className="new-ingredient-input new-ingredient-input-normal-number"
                                        value={fat} step=".01" onChange={(event) => setFat(event.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Protein:</td>
                                <td>
                                    <input type="number" className="new-ingredient-input new-ingredient-input-normal-number"
                                        value={protein} step=".01" onChange={(event) => setProtein(event.target.value)} />
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
