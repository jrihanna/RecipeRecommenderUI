import { useEffect, useState } from "react";

function Nutrition(props) {
    const [nutritionValues, setNutritionValues] = useState({});

    useEffect(() => {
        props.handleChange(nutritionValues)
    }, [nutritionValues]);
    
    return (
        <table className={props.className}>
            {props.minMax ?
                (<tbody>
                    <tr>
                        <td>Calories:</td>
                        <td><input type="number" className={props.inputClassName} id={props.minCaloryInputId} placeholder="Min"
                                onChange={(event) => setNutritionValues({...nutritionValues, minCalory: event.target.value})} /></td>
                        <td>-</td>
                        <td><input type="number" className={props.inputClassName} id={props.maxCaloryInputId} placeholder="Max"
                                onChange={(event) => setNutritionValues({...nutritionValues, maxCalory: event.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>Carbs:</td>
                        <td><input type="number" className={props.inputClassName} id={props.minCarbInputId} placeholder="Min"
                                onChange={(event) => setNutritionValues({...nutritionValues, minCarb: event.target.value})} /></td>
                        <td>-</td>
                        <td><input type="number" className={props.inputClassName} id={props.maxCarbInputId} placeholder="Max"
                                onChange={(event) => setNutritionValues({...nutritionValues, maxCarb: event.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>Fat:</td>
                        <td><input type="number" className={props.inputClassName} id={props.minFatInputId} placeholder="Min"
                                onChange={(event) => setNutritionValues({...nutritionValues, minFat: event.target.value})} /></td>
                        <td>-</td>
                        <td><input type="number" className={props.inputClassName} id={props.maxFatInputId} placeholder="Max"
                                onChange={(event) => setNutritionValues({...nutritionValues, maxFat: event.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>Protein:</td>
                        <td><input type="number" className={props.inputClassName} id={props.minProteinInputId} placeholder="Min"
                                onChange={(event) => setNutritionValues({...nutritionValues, minFat: event.target.value})} /></td>
                        <td>-</td>
                        <td><input type="number" className={props.inputClassName} id={props.maxProteinInputId} placeholder="Max"
                                onChange={(event) => setNutritionValues({...nutritionValues, maxProtein: event.target.value})} /></td>
                    </tr>
                </tbody>) :
                (<tbody>
                    <tr><td>Calories:</td><td>{props.nutrition.calory}</td></tr>
                    <tr><td>Carbs:</td><td>{props.nutrition.carbs + 'gr'}</td></tr>
                    <tr><td>Fat:</td><td>{props.nutrition.fat + 'gr'}</td></tr>
                    <tr><td>Protein:</td><td>{props.nutrition.protein + 'gr'}</td></tr>
                </tbody>)
            }
        </table>
    );
}

export default Nutrition;
