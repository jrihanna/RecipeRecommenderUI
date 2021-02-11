import './menu.css';

function Menu(props) {
  return (
    <div className="menu-main">
        {props.children}
    </div>
  );
}

export default Menu;
