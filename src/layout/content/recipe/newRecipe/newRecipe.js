import React, { useState } from "react";
import NewIngredientQuantityList from "./newIngredientQuantityList";
import ImageNotFound from '../../../../local_img/img_placeholder2.png';

function NewRecipe(props) {

    const [recipeName, setRecipeName] = useState("");
    const [ingredientsList, setIngredientsList] = useState([]);

    function submitNewRecipe(event) {
        console.log("submit")
        if(typeof props.submitNewRecipe === 'function')
            props.submitNewRecipe(recipeName, ingredientsList);
        event.preventDefault();
    }

    function onAddRemoveIngredient(ingIndex) {
        if(ingIndex > -1)
            setIngredientsList(ingredientsList.filter((item, index) => index !== ingIndex))
        else
            ingredientsList.push({})
    }

    function onIngredientChange(ingIndex, ingredientName, ingredientAmount, measurement) {
        let items = ingredientsList;
        let item = items[ingIndex];
        item = { ingredientName, ingredientAmount, measurement };
        items[ingIndex] = item;
        setIngredientsList(items);
    }

    return (
        <div>
            <form onSubmit={submitNewRecipe} method="POST">
                <div className="new-recipe-top-container">
                    <div className="new-recipe-img-div-container">
                        <div className="new-recipe-img-container-container">
                            <div className="new-recipe-img-container">
                                <img src={ImageNotFound} className="new-recipe-img" alt="Recipe Image" />
                            </div>
                            <div className="new-recipe-img-container new-recipe-img-container-hallow">
                                <label htmlFor="file-upload" className="new-recipe-file-upload">Upload</label>
                            </div>
                        </div>
                        <input id="file-upload" type="file" />
                    </div>
                    <div>
                        <input type="text" className="new-recipe-input new-recipe-input-recipe-name"
                            placeholder="Recipe Name" name="newRecipeName"
                            onChange={(event) => setRecipeName(event.target.value)}></input>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <div className="new-recipe-ingredients-title">Ingredients:</div>
                    {/* <hr /> */}
                    <NewIngredientQuantityList onIngredientChange={onIngredientChange} onAddRemoveIngredient={onAddRemoveIngredient}/>
                </div>
                <div className="new-recipe-button-container">
                    <button className="new-recipe-button new-recipe-submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default NewRecipe;
