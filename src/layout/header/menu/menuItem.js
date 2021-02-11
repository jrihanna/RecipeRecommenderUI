import './menu.css';
import React from "react";

function MenuItem(props) {
  return (
    <div className="menu-item-main" onClick={props.menuItemClicked}>
        <div>{props.title}</div>
        
    </div>
  );
}



export default MenuItem;
