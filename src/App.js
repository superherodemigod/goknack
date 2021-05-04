import React, { Component } from "react";
import Header from "./Header";
import CreatorFans from "./CreatorFans"
import "./App.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CreatorFans />
      </div>
    );
  }
}

export default App;
