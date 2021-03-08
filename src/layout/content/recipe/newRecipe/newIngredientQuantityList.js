import React, { useState, useEffect } from "react";
import Plus from '../../../../local_img/plus24.png';
import NewIngredientQuantity from "./newIngredientQuantity";
import './newRecipe.css';

function NewIngredientQuantityList(props) {
    
    const [newIngredientComponentList, setNewIngredientComponentList] = useState(generateFirstFew);
    const [newIngredientNameList, setNewIngredientNameList] = useState([]);
    const [removeIndex, setRemoveIndex] = useState(-1);
    const [addIndex, setAddIndex] = useState(-1);

    useEffect(()=> {
        if(removeIndex > -1){
            setNewIngredientComponentList(newIngredientComponentList.filter(
                item => item.key !== ("new-ingredient-container-" + removeIndex)))

            addRemoveIngredientsInParent(removeIndex)
            setRemoveIndex(-1);
        }
        if(addIndex > -1) {
            addRemoveIngredientsInParent(-1)
            setAddIndex(-1);
        }
    },[newIngredientComponentList, removeIndex, addIndex]);

    function generateFirstFew() {
        let initialList = [];
        for(var i = 0; i < 5; i++) {
            initialList.push(<NewIngredientQuantity index={i} 
                            onRemoveIngredient={removeIngredient} 
                            key={"new-ingredient-container-" + i}
                            updateIngredient={props.onIngredientChange}
                        />)
        }
        return initialList;        
    }

    function addIngredient() {
        const newIndex = newIngredientComponentList.length;
        setNewIngredientComponentList([...newIngredientComponentList,<NewIngredientQuantity index={newIndex} 
            onRemoveIngredient={removeIngredient} 
            key={"new-ingredient-container-" + newIndex}/>]);
        setNewIngredientNameList([...newIngredientNameList, newIndex])

        setAddIndex(1);
    }

    function removeIngredient(index) {
        setRemoveIndex(index)
    }

    function addRemoveIngredientsInParent(ingIndex) {
        if (typeof props.onAddRemoveIngredient === 'function') 
            props.onAddRemoveIngredient(ingIndex)
    }

    return (
        <div>
            {newIngredientComponentList}
            <button onClick={addIngredient} className="new-recipe-button new-recipe-ingredient-add-button">
                <img src={Plus} alt="add another" />&nbsp;
                Add Another
            </button>
        </div>
    );
}

export default NewIngredientQuantityList;
