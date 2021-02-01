
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
                                <td>{ingredient.name}</td>
                                <td>{ingredient.amount}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
            
    );
}

export default IngredientsList;
