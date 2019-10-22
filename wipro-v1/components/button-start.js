const React = require("react");

class ButtonStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.props.strLength,
      bitString: this.props.bitString,
      baseString: this.props.baseString
    };
  }

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
    // get Bitstring with length strLength
    fetch(`http://localhost:8080/rest/randomstring/${this.state.strLength}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
        console.log(data);
        this.setState({ baseString: data.baseString });
        this.props.updateProps({
          baseString: this.state.baseString
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <button onClick={this.start.bind(this)}>
          Start, Length: {this.state.strLength}
        </button>
      </div>
    );
  }
}

module.exports = ButtonStart;
