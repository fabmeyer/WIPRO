import React, { Component } from "react";

class buttonStart extends Component {
  state = {};

  start = () => {
    // TODO: write start logic here
    console.log("start button clicked");
  };

  render() {
    return (
      <div className="container">
        <button onClick={() => this.start}></button>
      </div>
    );
  }
}

export default buttonStart;
