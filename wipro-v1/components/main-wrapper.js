const React = require("react");
import ButtonStart from "./button-start";
import ButtonOutput from "./button-output";




class MainWrapper extends React.Component {
  state = {
    posts: []
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
      <div>
        <p>Hello World</p>
        <ButtonStart start={this.start}></ButtonStart>
        <ButtonOutput output={this.output}></ButtonOutput>
      </div>
    );
  }
}

module.exports = MainWrapper;
