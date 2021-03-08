import React, { useState, useEffect } from "react";
import Plus from '../../../../local_img/plus24.png';
import NewIngredientQuantity from "./newIngredientQuantity";
import './newRecipe.css';

function NewIngredientQuantityList(props) {
    
    const [newIngredientComponentList, setNewIngredientComponentList] = useState(generateFirstFew);
    const [newIngredientNameList, setNewIngredientNameList] = useState([]);
    const [simpleIngredientsList, setSimpleIngredientsList] = useState([]);
    const [removeIndex, setRemoveIndex] = useState(-1);
    const [addIndex, setAddIndex] = useState(-1);

    useEffect(()=> {
        if(removeIndex > -1){
            setNewIngredientComponentList(newIngredientComponentList.filter(
                item => item.key !== ("new-ingredient-container-" + removeIndex)));
            
            simpleIngredientsList.splice(removeIndex, 1);

            addRemoveIngredientsInParent(removeIndex)
            setRemoveIndex(-2);
        }
        if(addIndex > -1) {
            addRemoveIngredientsInParent(-1)
            simpleIngredientsList.push({})
            setAddIndex(-2);
        }
    },[newIngredientComponentList, setNewIngredientComponentList, 
        removeIndex, setRemoveIndex, addIndex, setAddIndex, simpleIngredientsList, setSimpleIngredientsList]);

    function generateFirstFew() {
        let initialList = [];
        for(var i = 0; i < 5; i++) {
            initialList.push(<NewIngredientQuantity index={i} 
                            onRemoveIngredient={removeIngredient} 
                            key={"new-ingredient-container-" + i}
                            updateIngredient={ingredientChange}
                        />)
        }
        return initialList;        
    }

    function ingredientChange(currentId, ingredientName, ingredientAmount, measurement) {
        let items = simpleIngredientsList;
        let item = items[currentId];
        item = { ingredientName, ingredientAmount, measurement };
        items[currentId] = item;
        setSimpleIngredientsList(items);
        if (typeof props.onIngredientChange === 'function') {
            props.onIngredientChange(items)
        }
    }

    function addIngredient() {
        const newIndex = newIngredientComponentList.length;
        setNewIngredientComponentList([...newIngredientComponentList,<NewIngredientQuantity index={newIndex} 
            onRemoveIngredient={removeIngredient} 
            key={"new-ingredient-container-" + newIndex}
            updateIngredient={ingredientChange}/>]);
        setNewIngredientNameList([...newIngredientNameList, newIndex])

        setAddIndex(1);
    }

    function removeIngredient(index) {
        setRemoveIndex(index)
    }

    function addRemoveIngredientsInParent(ingIndex) {
        if (typeof props.onIngredientChange === 'function') {
            props.onIngredientChange(simpleIngredientsList)
        }
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
