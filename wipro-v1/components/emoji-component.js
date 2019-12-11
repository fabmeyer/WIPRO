const React = require("react");

class EmojiComponent extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          margin: "10px"
        }}
      >
        <p>hello</p>
        <span
          className="emoji"
          role="img"
          aria-label={this.props.label ? this.props.label : ""}
          aria-hidden={this.props.label ? "false" : "true"}
        >
          {this.props.symbol}
        </span>
      </div>
    );
  }
}

module.exports = EmojiComponent;
