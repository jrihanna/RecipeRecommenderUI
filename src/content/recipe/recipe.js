import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import RecipeDetail from './recipeDetail';
import './recipe.css';
import 'reactjs-popup/dist/index.css';
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
                                    <div>
                                        <RecipeDetail />
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
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Calories:
                                </td>
                                <td>
                                    1231Cal
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Carbs:
                                </td>
                                <td>
                                    12g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Fat:
                                </td>
                                <td>
                                    20g
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RecipeItem;
