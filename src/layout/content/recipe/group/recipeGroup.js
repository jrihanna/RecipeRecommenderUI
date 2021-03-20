import React from "react";
import Popup from 'reactjs-popup';
import Collapsible from 'react-collapsible';
import RecipeSummary from "../../../../base/recipeSummary";
import * as api from '../../../../base/api/api';
import { RECIPE_GROUP_DOWNLOAD_PDF_PATH } from '../../../../base/api/config';
import Grocery from "../grocery/grocery";
import './recipeGroup.css';

function RecipeGroup(props) {

    const linkRef = React.createRef();
    const daysInWeek = [1, 2, 3, 4, 5, 6, 7];

    function getRecipeIds() {
        let ids = [30,33];
        for (let i in props.recipes)
            ids.push(i.id);

        return ids;
    }

    function downloadRecipesPdf(){
        const a = linkRef.current;
        const fetchData = async () => {
            try {
                // const data = 'recipeIds=' + recipeIds.join(",");
                const data = {"recipePerDay": {"1":[33, 33]}}
                const rawData = await api.post(RECIPE_GROUP_DOWNLOAD_PDF_PATH, data, linkRef);
                const blob = await rawData.blob();
                const href = window.URL.createObjectURL(blob);
                
                a.download = 'Recipes_For_This_Week.pdf';
                a.href = href;
                a.click();
                a.href = '';
            }
            catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }

    return (
        <div className="recipe-group-container">
            <div className="recipe-group-button-container">
                <Popup
                    trigger={
                        <button className="recipe-group-button recipe-group-grocery-button">Grocery List</button>}
                    modal>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>&times;</button>
                            <div className="content">
                                {<Grocery recipeIds={getRecipeIds()}/>}
                            </div>
                        </div>
                    )}
                </Popup>
                
                <button className="recipe-group-button recipe-group-download-button"
                        onClick={downloadRecipesPdf}>Download PDF</button>
                        <a ref={linkRef}/>
            </div>
            {props.recipes ? props.recipes.map((recipe, index) => {
                return (
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
                                                    <div><RecipeSummary recipe={recipe} /></div>
                                                </div>
                                                <div className="recipe-group-meal-container">
                                                    <div className="recipe-group-meal-title">Lunch</div>
                                                    <div><RecipeSummary recipe={recipe} /></div>
                                                </div>
                                                <div className="recipe-group-meal-container">
                                                    <div className="recipe-group-meal-title">Dinner</div>
                                                    <div><RecipeSummary recipe={recipe} /></div>
                                                </div>
                                                <div className="recipe-group-meal-container">
                                                    <div className="recipe-group-meal-title">Snack</div>
                                                    <div><RecipeSummary recipe={recipe} /></div>
                                                </div>
                                            </div>
                                        </Collapsible>
                                    </div>
                                )
                            })}

                        </Collapsible>
                    </div>)
            }) : (<div>Please enter a search query</div>)}
        </div>
    );
}

export default RecipeGroup;
