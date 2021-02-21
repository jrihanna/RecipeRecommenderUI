import { useState } from 'react';
import './tag.css';

function Tag(props) {
    const [selected, setSelected] = useState(false);

    function handleTagClick(event) {
        if (typeof props.onSelect === 'function') {
            props.onSelect();
            setSelected(!selected);
        }
        event.preventDefault();
    }

    return (
        <div className={selected ? "tag-container tag-selected" : "tag-container"} onClick={handleTagClick}>
            <div>{props.name}</div>
            {props.closeable &&
                <div className="tag-close-button">&times;</div>
            }
        </div>
    );
}

export default Tag;
