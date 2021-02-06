import RecipeGroup from './recipeGroup';
import './recipeContent.css';

function RecipeGroupList(props) {
    return (
        <div className="recipe-list-container">
            {props.recipes.map((recipeGroup, index) => {
                return (
                    <div className="recipe-list-item-container" key={'recipe-group-' + index + '-container'}>
                        <RecipeGroup recipe={recipeGroup} key={'recipe-group-' + index}/>
                    </div>
                )
            })}
        </div>
    );
}

export default RecipeGroupList;
