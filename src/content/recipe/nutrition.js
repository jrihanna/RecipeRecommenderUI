
function Nutrition(props) {
    return (
        <table className={props.className}>
            <tbody>
                {props.minMax ? (
                    <tr>
                        <td>Calories:</td>
                        <td><input type="text" className={props.inputClassName} id={props.minCaloryInputId} placeholder="Min" /></td>
                        <td>-</td>
                        <td><input type="text" className={props.inputClassName} id={props.maxCaloryInputId} placeholder="Max" />
                        </td>
                    </tr>) :
                    (<tr><td>Calories:</td><td>1231Cal</td></tr>)
                }
                {props.minMax ? (
                    <tr>
                        <td>Carbs:</td>
                        <td><input type="text" className={props.inputClassName} id={props.minCarbInputId} placeholder="Min" /></td>
                        <td>-</td>
                        <td><input type="text" className={props.inputClassName} id={props.maxCarbInputId} placeholder="Max" />
                        </td>
                    </tr>) :
                    (<tr><td>Carbs:</td><td>1231Cal</td></tr>)
                }
                {props.minMax ? (
                    <tr>
                        <td>Fat:</td>
                        <td><input type="text" className={props.inputClassName} id={props.minFatInputId} placeholder="Min" /></td>
                        <td>-</td>
                        <td><input type="text" className={props.inputClassName} id={props.maxatInputId} placeholder="Max" />
                        </td>
                    </tr>) :
                    (<tr><td>Fat:</td><td>1231Cal</td></tr>)
                }
                {/* <tr>
                    <td>Carbs:</td>
                    {props.editable ? <input type="text" className={props.inputClassName} id={props.carbInputId} /> : <td>12g</td>}
                </tr>
                <tr>
                    <td>Fat:</td>
                    {props.editable ? <input type="text" className={props.inputClassName} id={props.fatInputId} /> : <td>20g</td>}
                </tr> */}
            </tbody>
        </table>
    );
}

export default Nutrition;
