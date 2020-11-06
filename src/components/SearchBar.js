import React, { Component } from "react";

export class Search extends Component {
  state = {
    term: "",
  };
  // constructor(props) {
  //   super(props);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onUserSubmit(this.state.term);
  };
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
          // onSubmit={(event) => this.onFormSubmit(event)}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Hello World"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
