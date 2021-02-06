import './header.css';

function Header(props) {
  return (
    <div className="header-main">
      
      {props.children}
    </div>
  );
}

export default Header;
