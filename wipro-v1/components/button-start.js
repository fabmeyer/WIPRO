const React = require("react");

class ButtonStart extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div>
        <button {...props} onClick={() => this.props.start()}>
          Start
        </button>
      </div>
    );
  }
}

module.exports = ButtonStart;
