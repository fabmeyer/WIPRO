const React = require("react");
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
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(console.log);
  };

  output = () => {
    // TODO: insert nice output here
    this.setState({
      content: JSON.stringify(this.state.posts.map(c => c.title), null, "\n")
    });
    console.log(this.state.content);
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
