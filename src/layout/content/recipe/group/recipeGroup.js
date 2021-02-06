import React from "react";
import Collapsible from 'react-collapsible';
import RecipeSummary from "../../../../base/recipeSummary";
import './recipeGroup.css';

function RecipeGroup(props) {
    const index = 1;
    const daysInWeek = [1, 2, 3, 4, 5, 6, 7];
    const recipe={'id': '1','recipeName': 'Name123', 'img': './img/pizza1.jpg'};

    return (
        <div className="recipe-group-container">
            <div className="recipe-group-button-container">
                <button className="recipe-group-button recipe-group-grocery-button">Grocery List</button>
                <button className="recipe-group-button recipe-group-download-button">Download PDF</button>
            </div>
            {/* {props.recipes.map((recipe, index) => {
                return ( */}
            <div key={'recipe-group-week-container' + index}>
                <Collapsible trigger="Week 1" triggerTagName="div" triggerClassName="recipe-group-trigger"
                    triggerOpenedClassName="recipe-group-trigger recipe-group-header-open">
                    {daysInWeek.map((day, dayIndex) => {
                        return (
                            <div className="recipe-group-day-group" key={'day-container-' + dayIndex}>
                                <Collapsible trigger={'Day ' + day} triggerTagName="div" 
                                    triggerClassName="recipe-day-group-trigger"
                                    triggerOpenedClassName="recipe-day-group-trigger recipe-day-group-header-open">
                                    <div className="recipe-group-day-content-container">
                                        <div className="recipe-group-meal-container">
                                            <div className="recipe-group-meal-title">Breakfast</div>
                                            <div><RecipeSummary recipe={recipe}/></div>
                                        </div>
                                        <div className="recipe-group-meal-container">
                                            <div className="recipe-group-meal-title">Lunch</div>
                                            <div><RecipeSummary recipe={recipe}/></div>
                                        </div>
                                        <div className="recipe-group-meal-container">
                                            <div className="recipe-group-meal-title">Dinner</div>
                                            <div><RecipeSummary recipe={recipe}/></div>
                                        </div>
                                        <div className="recipe-group-meal-container">
                                            <div className="recipe-group-meal-title">Snack</div>
                                            <div><RecipeSummary recipe={recipe}/></div>
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                        )
                    })}

                </Collapsible>
            </div>

            {/* })} */}
        </div>
    );
}

export default RecipeGroup;
