import React, { useState, useEffect } from "react";
import NewIngredientQuantityList from "./newIngredientQuantityList";
import * as api from '../../../../base/api/api';
import {RECIPE_ADD_PATH} from '../../../../base/api/config';
import ImageNotFound from '../../../../local_img/img_placeholder2.png';

function NewRecipe(props) {

    const [recipeName, setRecipeName] = useState("");
    const [instructions, setInstructions] = useState("");
    const [iconSrc, setIconSrc] = useState("");
    const [ingredientsList, setIngredientsList] = useState([]);

    useEffect(()=> {
        setIngredientsList(ingredientsList)
        
    },[setIngredientsList]);

    function submitNewRecipe(event) {
        const fetchData = async () => {
            try {
                if(ingredientsList != null && ingredientsList.length > 0) {
                    const data = {recipeName, ingredients: ingredientsList, instructions, iconSrc}
                    const rawData = await api.post(RECIPE_ADD_PATH, data);
                    const resp = await rawData.json();
                    console.log(resp)
                }
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

    function updateIngredients() {
        console.log(ingredientsList)
    }

    function onIngredientChange(updatedList) {
        setIngredientsList(updatedList)
    }

    return (
        <div>
            <form onSubmit={submitNewRecipe} method="POST">
                <div className="new-recipe-top-container">
                    <div className="new-recipe-img-div-container">
                        <div className="new-recipe-img-container-container">
                            <div className="new-recipe-img-container">
                                <img src={ImageNotFound} className="new-recipe-img" alt="Recipe" />
                            </div>
                            <div className="new-recipe-img-container new-recipe-img-container-hallow">
                                <label htmlFor="file-upload" className="new-recipe-file-upload">Upload</label>
                            </div>
                        </div>
                        <input id="file-upload" type="file" onChange={(event)=> setIconSrc(event.target.value)} />
                    </div>
                    <div>
                        <div>
                            <input type="text" className="new-recipe-input new-recipe-input-recipe-name"
                                placeholder="Recipe Name" name="newRecipeName"
                                onChange={(event) => setRecipeName(event.target.value)}/>
                        </div>
                        <div>
                            Category:
                            <select id="category-option" className="new-recipe-input new-recipe-select" required
                                >
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                <option>Snack</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <div className="new-recipe-ingredients-title">Ingredients:</div>
                    {/* <hr /> */}
                    <NewIngredientQuantityList onIngredientChange={onIngredientChange} 
                        updateIngredients={updateIngredients}/>
                </div>
                <br />
                <div>
                    <div className="new-recipe-ingredients-title">Instructions:</div>
                    <textarea className="new-recipe-input new-recipe-input-textarea" required
                    onChange={(event)=> setInstructions(event.target.value)}/>
                </div>
                <div className="new-recipe-button-container">
                    <button className="new-recipe-button new-recipe-submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default NewRecipe;
