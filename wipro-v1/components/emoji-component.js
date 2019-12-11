const React = require("react");
import Emoji from "react-emoji-render";

class EmojiComponent extends React.PureComponent {
  render() {
    return (
      <span
        style={{
          margin: "10px 0",
          fontSize: "50px"
        }}
      >
        <Emoji text={this.props.emoji} />
      </span>
    );
  }
}

module.exports = EmojiComponent;
