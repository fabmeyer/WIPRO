const React = require('react');
class Text extends React.PureComponent {

  reverseString() {
    this.props.updateProps({
      value: this.props.value.split("").reverse().join("")
    })
  }

  render() {
    return (
      <button onClick={this.reverseString.bind(this)}>
        Click me.
      </button>
    );
  }
}

module.exports = Text;