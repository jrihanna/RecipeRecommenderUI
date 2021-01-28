import React from "react";
import './search.css';


function Search(props) {
    
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     value: ''
    //   };
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  
    function handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    function handleSubmit(event) {
      alert('An essay was submitted: ');
      event.preventDefault();
    }
  
      return (
        <form onSubmit={handleSubmit}> 
          <div className="search-container">           
                <input type="text" value="" onChange={handleChange} className="search-input" />
                <button type="submit" className="submit-button"></button>
            </div>
        </form>
      );
  }

export default Search;
