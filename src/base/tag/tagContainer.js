import React from "react";
import * as api from '../api/api';
import Tag from './tag';
import './tag.css';

class TagContainer extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.setState({
            selectable: props.selectable ? true : false,
            selectedItems: []
            // handleItemClick: props.handleTagClick
        })
        this.handleClick = this.handleClick.bind(props);
    }

    componentDidMount() {
        this.fetchTags();
    }

    fetchTags() {
        const fetchData = async () => {
            try {
                const rawData = await api.get("base/tags", "");
                const resp = await rawData.json();
                this.setState({ tags: resp, selectable: true });
                return resp;
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }

    handleClick(selectedItems) {
        this.handleTagClick(selectedItems)
    }

    toggleSelectTag = (newlySelected, e) => {
        if(this.state.selectable) {
            let selecteds = this.state.selectedItems;
            selecteds ? (selecteds.some(item => item === newlySelected) ? selecteds.splice(newlySelected, 1) : selecteds.push(newlySelected)): selecteds = [newlySelected];
            this.setState({...this.state, selectedItems: selecteds});

            this.handleClick(selecteds);
        }
    }

    render() {
        return (
            <div className={this.state.selectable ? "tag-selectable" : ""}>
                {
                    (this.state && this.state.tags) ? this.state.tags.map((tag, index) => {
                        return (<Tag name={tag.name} key={'tag-' + index} selectable={this.state.selectable} 
                                        onSelect = {(e) => this.toggleSelectTag(tag.name, e)} />);
                    }) : <div>&nbsp;</div>
                }
            </div>
        );
    }
}

export default TagContainer;
