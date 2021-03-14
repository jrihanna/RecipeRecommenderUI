import './grocery.css';
import ImageNotFound from '../../../../local_img/img_placeholder2.png';

function GroceryItem(props) {
    // const quantities = props.quantity.join(",");

    return (
        <div className="grocery-item-container">
            <table className="grocery-item-table">
                <tbody>
                    <tr>
                        <td className="grocery-item-cell-icon">
                            <img src={ImageNotFound} className="grocery-item-icon"/>
                        </td>
                        <td className="grocery-item-cell">
                            <div>{props.name}</div>
                            <div>
                            {
                                props.quantity.map((q, index)=>{
                                    return <div key={"grocery-item-" + index}>{q}</div>
                                })
                            }
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GroceryItem;
