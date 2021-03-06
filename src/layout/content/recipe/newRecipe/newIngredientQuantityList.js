import React, { useState, useEffect } from "react";
import Plus from '../../../../local_img/plus24.png';
import NewIngredientQuantity from "./newIngredientQuantity";
import './newRecipe.css';

function NewIngredientQuantityList(props) {
    
    const [newIngredientComponentList, setNewIngredientComponentList] = useState([]);
    const [newIngredientNameList, setNewIngredientNameList] = useState([]);
    const [removeIndex, setRemoveIndex] = useState(-1);

    useEffect(()=> {
        if(removeIndex > -1){
            setNewIngredientComponentList(newIngredientComponentList.filter(
                item => item.key !== ("new-ingredient-container-" + removeIndex)))
                setRemoveIndex(-1);
        }
    },[newIngredientComponentList, removeIndex]);


    function addIngredient() {
        const newIndex = newIngredientComponentList.length;
        setNewIngredientComponentList([...newIngredientComponentList,<NewIngredientQuantity index={newIndex} 
            onRemoveIngredient={removeIngredient} 
            key={"new-ingredient-container-" + newIndex}/>]);
        setNewIngredientNameList([...newIngredientNameList, newIndex])
    }

    function removeIngredient(index) {
        setRemoveIndex(index)
    }

    return (
        <div>
            {newIngredientComponentList}
            <img src={Plus} alt="add another" onClick={addIngredient}/>
        </div>
    );
}

export default NewIngredientQuantityList;
