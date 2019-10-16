const React = require("react");

class ButtonStart extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    console.log("ButtonStart.props: ", this.props);
    return (
      <div {...props}>
        <button onClick={this.props.start}>Start</button>
      </div>
    );
  }
}

module.exports = ButtonStart;
