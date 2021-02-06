import React from 'react';
import Popup from 'reactjs-popup';
import RecipeDetail from '../layout/content/recipe/recipeDetail';
import Nutrition from './nutrition';
import OtherDetails from './otherDetails';
import './recipeSummary.css';
import './modal.css';
import ImageNotFound from '../img/img_placeholder2.png';

function RecipeSummary(props) {
    const otherDetails = [{'name': 'Cooking Time', 'value': '26 min'}, 
    {'name': 'Cuisine', 'value': 'Iranian'}, 
    {'name': 'Chef', 'value' : 'Me'}, 
    {'name': 'Source', 'value': 'www'}]

    const img_address = props.recipeImg ? props.recipeImg : ImageNotFound;
    
    return (
        <div className="">
            <div className="recipe-item-container">
                <div className="recipe-item-summary-container">
                    <div className="recipe-item-detail">
                        <div className="recipe-item-summary-item-container">
                            <img src={img_address} className="recipe-item-img" />
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
                                        <RecipeDetail img={img_address} recipeName="Pizza1"/>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
                <div className="recipe-summary-recipe-name">
                    {props.recipe.recipeName != null ? props.recipe.recipeName : 'Recipe Name'}
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
