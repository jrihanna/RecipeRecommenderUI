import React, { useState, useEffect, useRef } from "react";
import ReactToPrint from 'react-to-print';
import GroceryItem from './groceryItem';
import * as api from '../../../../base/api/api';
import { RECIPE_GROCERY_PATH } from '../../../../base/api/config';
import './grocery.css';

function Grocery(props) {
    const [groceryItems, setGroceryItems] = useState([]);
    const recipeIds = props.recipeIds;
    const componentRef = useRef();

    useEffect(() => {
        setGroceryItems([]);
        const fetchData = async () => {
            try {
                const data = 'recipeIds=' + recipeIds.join(",");
                const rawData = await api.get(RECIPE_GROCERY_PATH, data, false);
                const resp = await rawData.json();
                let items = []

                Object.keys(resp).map((key, index) => {
                    console.log(resp[key])
                    items.push(<GroceryItem name={key} quantity={resp[key]} key={"recipe-group-grocery" + index} />)
                })
                setGroceryItems(items)
            }
            catch (e) {
                console.log(e);
            }
        };
        fetchData();

    }, [recipeIds]);

    return (
        <div className="grocery-list-container-container">
            <div>
                <ReactToPrint
                    trigger={() =>  <button className="recipe-group-button recipe-group-download-button">
                                        Download PDF
                                    </button>}
                    content={() => componentRef.current}
                />
            </div>
            <div>
                <div className="grocery-list-container page-break" id="divIdToPrint" ref={componentRef} >
                    {groceryItems}
                </div>
            </div>
            <div>
                <ReactToPrint
                    trigger={() =>  <button className="recipe-group-button recipe-group-download-button">
                                        Download PDF
                                    </button>}
                    content={() => componentRef.current}
                />
            </div>
        </div>
    );
}

export default Grocery;
