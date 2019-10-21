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

    this.setState({
      content: JSON.stringify(this.state.posts.map(c => c.title), null, "\n")
    });
    // TODO: showing output from /data instead of React state
    // fs.writeFile("output.json", this.data.content, "utf8", function(err) {
    //   if (err) {
    //     console.log("An error occured while writing JSON Object to File.");
    //     return console.log(err);
    //   }
    //   console.log("JSON file has been saved.");
    // });
    const myPosts = JSON.stringify(this.state.posts.map(c => c.title), null, 2);
    console.log(this.state.posts);
    alert(myPosts);
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
