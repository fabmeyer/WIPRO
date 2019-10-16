const React = require("react");
import ButtonStart from "./button-start";
import ButtonOutput from "./button-output";

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
  };

  output = () => {
    // TODO: insert nice output here
    const myPosts = JSON.stringify(this.state.posts.map(c => c.title), null, 2);
    alert(myPosts);
  };

  render() {
    return (
      <div className="main-container">
        <div className="start-container">
          <ButtonStart start={this.start}></ButtonStart>
        </div>
        <div className="output-container">
          <ButtonOutput output={this.output}></ButtonOutput>
        </div>
      </div>
    );
  }
}

module.exports = MainWrapper;
