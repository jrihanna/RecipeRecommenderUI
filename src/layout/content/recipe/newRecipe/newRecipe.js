import React, { useState, useEffect } from "react";
import NewIngredientQuantityList from "./newIngredientQuantityList";

function NewRecipe(props) {


    // useEffect(()=>{
    //     console.log(newIngredientComponentList)
    // },[newIngredientComponentList, setNewIngredientComponentList])

    

    return (
        <div className="">
            <form>
                <div>
                    <div>image</div>
                    <div>name your recipe</div>
                    <div><input type="text"></input></div>
                </div>
                <div>
                    <NewIngredientQuantityList />
                </div>
            </form>
        </div>
    );
}

export default NewRecipe;
