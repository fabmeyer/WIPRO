const React = require("react");

class ButtonStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.props.strLength,
      bitString: this.props.bitString,
      baseString: this.props.baseString
    };

    this.checktype(this.props.strLength);
  }

  checktype = arg => {
    if (typeof arg !== "number") {
      console.log(arg, "is not a number, it is a", typeof arg);
      if (typeof arg === "string") {
        const newNum = Number(arg.toPrecision());
        console.log(newNum);
        this.setState({
          strLength: newNum
        });
        console.log(typeof this.state.strLength);
      }
    } else console.log("it's a number");
  };

  componentDidMount() {
    this.start();
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
    this.checktype(this.state.strLength);
    // get Bitstring with length strLength
    fetch(`http://localhost:8080/rest/randomstring/${this.state.strLength}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ bitString: data.bitString });
        this.props.updateProps({
          bitString: this.state.bitString
        });
      })
      .catch(console.log);
    // get Basestring with length strLength
    fetch(`http://localhost:8080/rest/randombase/${this.state.strLength}`)
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
    const buttonStyle = {
      padding: "5px",
      border: "1px solid #999",
      borderRadius: "5px",
      font: "32px"
    };

    return (
      <div>
        <button onClick={this.start.bind(this)} style={buttonStyle}>
          Start, Length: {this.state.strLength}
        </button>
      </div>
    );
  }
}

module.exports = ButtonStart;
