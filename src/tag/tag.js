import './tag.css';

function Tag(props) {
    return (
        <div className="tag-container">
            <div className="tag-content">{props.tagName}</div>
            {props.closeable &&
                <div className="tag-close-button">&times;</div>
            }
        </div>
    );
}

export default Tag;
