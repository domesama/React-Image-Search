import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageLists from "./ImageLists";

export class App extends Component {
  state = {
    pictureArray: [],
  };

  onSearchSubmit = async (term) => {
    console.log(term);
    const res = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    // .then((res) => {
    //   console.log(res["data"]["results"]);
    // });

    // console.log(res["data"]["results"]);
    this.setState({ pictureArray: res["data"]["results"] });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        <ImageLists pictureArray={this.state.pictureArray} />
      </div>
    );
  }
}

export default App;
