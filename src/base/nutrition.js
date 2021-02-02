function Nutrition(props) {
    return (
        <table className={props.className}>
            {props.minMax ?
                (<tbody>
                    <tr>
                        <td>Calories:</td>
                        <td><input type="text" className={props.inputClassName} id={props.minCaloryInputId} placeholder="Min" /></td>
                        <td>-</td>
                        <td><input type="text" className={props.inputClassName} id={props.maxCaloryInputId} placeholder="Max" /></td>
                    </tr>
                    <tr>
                        <td>Carbs:</td>
                        <td><input type="text" className={props.inputClassName} id={props.minCarbInputId} placeholder="Min" /></td>
                        <td>-</td>
                        <td><input type="text" className={props.inputClassName} id={props.maxCarbInputId} placeholder="Max" /></td>
                    </tr>
                    <tr>
                        <td>Fat:</td>
                        <td><input type="text" className={props.inputClassName} id={props.minFatInputId} placeholder="Min" /></td>
                        <td>-</td>
                        <td><input type="text" className={props.inputClassName} id={props.maxFatInputId} placeholder="Max" /></td>
                    </tr>
                </tbody>) :
                (<tbody>
                    <tr><td>Calories:</td><td>1231Cal</td></tr>
                    <tr><td>Carbs:</td><td>1231Cal</td></tr>
                    <tr><td>Fat:</td><td>1231Cal</td></tr>
                </tbody>)
            }
        </table>
    );
}

export default Nutrition;
