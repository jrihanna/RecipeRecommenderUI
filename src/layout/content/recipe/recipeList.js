import RecipeSummary from '../../../base/recipeSummary';
import './recipeContent.css';

function RecipeList(props) {
    
    return (
        <div className="recipe-list-container">
            {props.recipes.map((recipe, index) => {
                return (
                    <div className="recipe-list-item-container" key={'recipe-summary-' + index + '-container'}>
                        <RecipeSummary recipe={recipe} key={'recipe-summary-' + index} />
                    </div>
                )
            })}
        </div>
    );
}

export default RecipeList;
