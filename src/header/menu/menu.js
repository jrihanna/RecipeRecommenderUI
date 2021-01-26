import './menu.css';
import MenuItem from './menuItem';

function Menu(props) {
  return (
    <div className="menu-main">
        {props.children}
    </div>
  );
}

export default Menu;
