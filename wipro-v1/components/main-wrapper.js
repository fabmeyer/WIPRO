const React = require("react");
// const fs = require("fs");
import ButtonStart from "./button-start";
import ButtonOutput from "./button-output";
import OutputBox from "./output-box";

class MainWrapper extends React.Component {
  state = {
    posts: [],
    content: []
  };

  start = () => {
    // TODO: insert start logic here
    fetch("http://localhost:8080/rest/randomstring/16")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(console.log);
  };

  output = () => {
    // TODO: insert nice output here
    var bitString = this.state.posts.bitString;
    console.log(bitString);
    alert(bitString);
  };

  render() {
    return (
      <div className="main-container">
        <div className="start-button-container">
          <ButtonStart start={this.start} />
        </div>
        <div className="output-button-container">
          <ButtonOutput output={this.output} />
        </div>
        <div className="output-text-container">
          <OutputBox content={this.state.content} />
        </div>
      </div>
    );
  }
}

module.exports = MainWrapper;
