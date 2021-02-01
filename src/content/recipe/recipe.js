import React from 'react';
import Popup from 'reactjs-popup';
import RecipeDetail from './recipeDetail';
import Nutrition from './nutrition';
import './recipe.css';
import '../modal.css';
import Pizza from '../../img/pizza1.jpg';

function RecipeItem(props) {

    return (
        <div className="">
            <div className="recipe-item-container">
                <div className="recipe-item-detail-container">
                    <div className="recipe-item-detail">
                        <div className="recipe-item-detail-item-container">
                            <img src={Pizza} className="recipe-item-img" />
                        </div>
                        <Popup
                            trigger={
                                <div className="recipe-item-detail-item-container recipe-item-detail-item-container-hallow">
                                    Show Recipe
                                </div>}
                            modal>
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>&times;</button>
                                    <div className="content">
                                        <RecipeDetail img={Pizza} recipeName="Pizza1"/>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
                <div>
                    Recipe Name
                </div>
                <div>
                    <Nutrition className="receipe-detail-detail-nutrition" />
                </div>
            </div>
        </div>
    );
}

export default RecipeItem;
