import './content.css';

function MainContent(props) {
  return (
    <div className="">
        
        {props.children}
    </div>
  );
}

export default MainContent;
