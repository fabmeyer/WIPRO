const React = require("react");

class OutputBox extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="output-box">
        <p {...props}>{this.props.content}</p>
      </div>
    );
  }
}

module.exports = OutputBox;
