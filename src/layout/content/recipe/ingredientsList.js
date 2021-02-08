
function IngredientsList(props) {
    return (
        <div>
            <div>
                Ingredients:
            </div>
            <div>
                <table className={props.className}>
                    <tbody>
                        {props.ingredients.map((ingredient, index) => {
                            return (<tr key={'recipe-detail-ingredient' + index}>
                                <td>{ingredient.ingredient.name}</td>
                                <td>{ingredient.quantity + 'gr'}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
            
    );
}

export default IngredientsList;
