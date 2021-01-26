import './menu.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function MenuItem(props) {
  return (
    <div className="menu-item-main" onClick={props.menuItemClicked}>
        <div>{props.title}</div>
        
    </div>
  );
}



export default MenuItem;
