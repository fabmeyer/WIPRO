const React = require("react");
import ButtonStart from "./button-start.js";

class MainWrapper extends React.Component {
  state = {
    posts: []
  };

  start = async () => {
    // TODO: insert start logic here
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const myJson = await response.json();
      console.log(JSON.stringify(myJson));
      console.log("start button clicked");

      if (this.state.posts !== []) {
        const posts = [...this.state.posts];
        posts.push({
          body: json.body,
          id: json.id,
          title: json.title,
          userId: json.userId
        });
        this.setState({ posts });
      } else {
        const posts = [
          {
            body: json.body,
            id: json.id,
            title: json.title,
            userId: json.userId
          }
        ];
        this.setState({ posts });
      }
      console.log("MainWrapper.state: ", this.state);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      console.log("done");
    }
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
