import React, { useState } from "react";
import * as api from '../../../base/api/api';
import { INGREDIENT_ADD_PATH } from '../../../base/api/config';
import IngredientAutoCompleteSingle from "../../../base/ingredient/ingredientAutocompleteSingle";
import { useAlert } from 'react-alert';
import './newIngredient.css';

function NewIngredient(props) {
    const [ingredientName, setIngredientName] = useState("");
    const [measurement, setMeasurement] = useState("gr");
    const [category, setCategory] = useState("fruit");
    const [calories, setCalories] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");
    const [protein, setProtein] = useState("");

    const alert = useAlert();

    function submitNewIngredient(event) {
        event.preventDefault();

        if (!validate()) {
            alert.show("Please fill required values");
        }
        else {
            const fetchData = async () => {
                try {
                    const data = {
                        name: ingredientName, measurement, category,
                        nutritionalValue: { calory: calories, carbs, fat, protein }
                    }
                    const resp = await api.post(INGREDIENT_ADD_PATH, data);
                    if (resp.status >= 200 && resp.status <= 300) {
                        alert.show("Ingredient successfully saved");
                    }
                    else {
                        alert.show("An error happened!");
                    }
                }
                catch (e) {
                    console.log(e);
                }
            };
            fetchData();
        }
        // if(typeof props.submitNewRecipe === 'function')
        //     props.submitNewRecipe(recipeName, ingredientsList);
    }

    function validate() {
        if (ingredientName === "")
            return false;
        if (calories == null || calories == 0)
            return false;
        if (fat == null || fat == 0)
            return false;
        if (carbs == null || carbs == 0)
            return false;
        if (protein == null || protein == 0)
            return false;
        return true;
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
                                    <IngredientAutoCompleteSingle required compId="list-include" 
                                    onChange={(e) => setIngredientName(e.target.value)} handleIngredientChange={handleIncludeIngredientList} />
                                    {/* <input type="text" className="new-ingredient-input new-ingredient-input-normal-text"
                                        required onChange={(e) => setIngredientName(e.target.value)}/> */}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Category:</label>
                                </td>
                                <td>
                                    <select id="category-option" value={category === null ? 'fruit' : category}
                                        onChange={(e) => setCategory(e.target.value)} className="new-ingredient-input new-ingredient-select" onChange={(event) => setMeasurement(event.target.value)}>
                                        <option value="fruit" selected>Fruits</option>
                                        <option value="nuts">Grain, nuts and baking products</option>
                                        <option value="herbs">Herbs and spices</option>
                                        <option value="meat">Meat, sausages and fish</option>
                                        <option value="pulses">Pasta, rice and pulses</option>
                                        <option value="vegetables">Vegetables</option>
                                        <option value="dairy">Eggs, milk and milk products</option>
                                        <option value="oils">Fats and oils</option>
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
                                    <input type="number" required className="new-ingredient-input new-ingredient-input-normal-number"
                                        value={calories} step=".01" onChange={(event) => setCalories(event.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Carbs:</td>
                                <td>
                                    <input type="number" required className="new-ingredient-input new-ingredient-input-normal-number"
                                        value={carbs} step=".01" onChange={(event) => setCarbs(event.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Fat:</td>
                                <td>
                                    <input type="number" required className="new-ingredient-input new-ingredient-input-normal-number"
                                        value={fat} step=".01" onChange={(event) => setFat(event.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Protein:</td>
                                <td>
                                    <input type="number" required className="new-ingredient-input new-ingredient-input-normal-number"
                                        value={protein} step=".01" onChange={(event) => setProtein(event.target.value)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div className="new-ingredient-button-container">
                        <button className="new-ingredient-button new-ingredient-submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewIngredient;
