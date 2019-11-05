const React = require("react");

class ButtonStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength),
      bitString: this.props.bitString,
      baseString: this.props.baseString
    };
  }

  checkType = arg => {
    if (typeof arg !== "number") {
      return eval(arg);
    } else {
      return arg;
    }
  };

  componentDidMount() {
    if (this.props.autostart) {
      this.start();
    }
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.strLength !== newProps.strLength) {
      this.setState({
        strLength: this.props.strLength
      });
    }
  }

  start() {
    // convert from to number
    const newLenght = this.checkType(this.state.strLength);
    // get Bitstring with length strLength
    fetch(`http://localhost:8080/rest/randomstring/${newLenght}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ bitString: data.bitString });
        this.props.updateProps({
          bitString: this.state.bitString
        });
      })
      .catch(console.log);
    // get Basestring with length strLength
    fetch(`http://localhost:8080/rest/randombase/${newLenght}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ baseString: data.baseString });
        this.props.updateProps({
          baseString: this.state.baseString
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.start.bind(this)}>
          {this.props.text}, Length: {this.state.strLength}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonStart;
