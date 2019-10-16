const React = require("react");
import ButtonStart from "./button-start.js";

class MainWrapper extends React.Component {
  state = {
    posts: []
  };

  start = () => {
    // TODO: insert start logic here
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(console.log);
    console.log("state: ", this.state);
  };

  render() {
    return (
      <div>
        <p>Hello World</p>
        <ButtonStart start={this.start}></ButtonStart>
      </div>
    );
  }
}

module.exports = MainWrapper;
