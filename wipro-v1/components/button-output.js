const React = require("react");

class ButtonOutput extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div>
        <button {...props} onClick={this.props.output}>
          Output
        </button>
      </div>
    );
  }
}

module.exports = ButtonOutput;
