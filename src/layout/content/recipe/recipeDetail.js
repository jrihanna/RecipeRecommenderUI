import React from 'react';
import './recipeDetail.css';
import Nutrition from '../../../base/nutrition';
import IngredientsList from './ingredientsList';
import OtherDetails from "../../../base/recipe/otherDetails";
import Tag from '../../../base/tag/tag';

function RecipeDetail(props) {
    const otherDetails = [{'name': 'Cooking Time', 'value': '26 min'}, 
                            {'name': 'Cuisine', 'value': 'Iranian'}, 
                            {'name': 'Chef', 'value' : 'Me'}, 
                            {'name': 'Source', 'value': 'www'}]

    const recipe = props.recipe;

    return (
        <div className="recipe-detail-container">
            <div className="recipe-detail-header">
                {recipe.name}
            </div>
            <div>
                <div className="recipe-detail-img-container">
                    <img src={`/img/${recipe.icon}`} className="recipe-detail-big-img" alt="Recipe"/>
                </div>
                <div className="recipe-detail-detail-container">
                    <OtherDetails otherDetails={otherDetails} className="recipe-detail-detail-other"/>
                    <br/>
                    <Nutrition className="recipe-detail-detail-nutrition" nutrition={recipe.nutritionalValue} />
                </div>
            </div>
            <div>
                <div className="recipe-detail-ingredients-container">
                    <IngredientsList ingredients={recipe.ingredients} className="recipe-detail-ingredients-table"/>
                </div>
                <div className="recipe-detail-instruction-container">
                    <div className="recipe-detail-instruction-header">
                        Recipe:
                    </div>
                    <div>
                        {recipe.instructions}
                    </div>
                </div>
            </div>
            <br/>
            <div>
                {recipe.tags.map((tag, index) => {
                    return (<Tag tagName={tag.name} key={'recipe-tag-' + index}/>)
                })}
            </div>
            <br/><hr className="recipe-detail-divider"/>
            <div className="recipe-detail-button-container">
                <button className="recipe-detail-button recipe-detail-addtoplan-button">Add to Plan</button>
                <button className="recipe-detail-button recipe-detail-download-button">Download PDF</button>
            </div>
        </div>
    );
}

export default RecipeDetail;
