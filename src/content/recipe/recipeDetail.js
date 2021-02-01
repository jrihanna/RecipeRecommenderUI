import React from 'react';
import './recipeDetail.css';
import Nutrition from './nutrition';
import IngredientsList from './ingredientsList';
import OtherDetails from "./otherDetails";
import Tag from '../../tag/tag';

function RecipeDetail(props) {
    const ingredients = [{name:'1', amount: '1'},{name:'2', amount: '2'}]
    const otherDetails = [{'name': 'Cooking Time', 'value': '26 min'}, 
                            {'name': 'Cuisine', 'value': 'Iranian'}, 
                            {'name': 'Chef', 'value' : 'Me'}, 
                            {'name': 'Source', 'value': 'www'}]
    const tags = [{'tagName': 'Keto'}, {'tagName':'Vegetarian'}]

    return (
        <div className="recipe-detail-container">
            <div className="receipe-detail-header">
                {props.recipeName}
            </div>
            <div>
                <div className="receipe-detail-img-container">
                    <img src={props.img} className="recipe-detail-big-img"/>
                </div>
                <div className="receipe-detail-detail-container">
                    <Nutrition className="receipe-detail-detail-nutrition" />
                    <br/>
                    <OtherDetails otherDetails={otherDetails} className="receipe-detail-detail-other"/>
                </div>
            </div>
            <div>
                <div className="recipe-detail-ingredients-container">
                    <IngredientsList ingredients={ingredients} className="recipe-detail-ingredients-table"/>
                </div>
                <div className="receipe-detail-instruction-container">
                    <div className="receipe-detail-instruction-header">
                        Recipe:
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                        sapiente! Laudantium, aperiam doloribus. Odit, aut.
                    </div>
                </div>
            </div>
            <br/>
            <div>
                {tags.map((value, index) => {
                    return (<Tag tagName={value.tagName} key={'recipe-tag-' + index}/>)
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
