import React from 'react';
import Popup from 'reactjs-popup';
import RecipeDetail from '../../layout/content/recipe/recipeDetail';
import OtherDetails from './otherDetails';
import './recipeSummary.css';
import '../modal.css';
import ImageNotFound from '../../local_img/img_placeholder2.png';

function RecipeSummary(props) {
    const otherDetails = [{'name': 'Cooking Time', 'value': '26 min'}, 
    {'name': 'Cuisine', 'value': 'Iranian'}, 
    {'name': 'Chef', 'value' : 'Me'}, 
    {'name': 'Source', 'value': 'www'}]

    const recipe = props.recipe;

    const img_address = recipe.icon ? `/img/${recipe.icon}` : ImageNotFound;
    
    return (
        <div className="">
            <div className="recipe-item-container">
                <div className="recipe-item-summary-container">
                    <div className="recipe-item-detail">
                        <div className="recipe-item-summary-item-container">
                            <img src={img_address} className="recipe-item-img" alt="Recipe Image"/>
                        </div>
                        <Popup
                            trigger={
                                <div className="recipe-item-summary-item-container recipe-item-detail-item-container-hallow">
                                    Show Recipe
                                </div>}
                            modal>
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>&times;</button>
                                    <div className="content">
                                        <RecipeDetail recipe={recipe}/>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
                <div className="recipe-summary-recipe-name">
                    {recipe.name != null ? recipe.name : 'Recipe Name'}
                </div>
                <br/>
                <div>
                    {/* <Nutrition className="recipe-detail-detail-nutrition" /> */}
                    <OtherDetails otherDetails={otherDetails} className="recipe-detail-detail-other"/>
                </div>
            </div>
        </div>
    );
}

export default RecipeSummary;
