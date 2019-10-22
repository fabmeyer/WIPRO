const React = require("react");

class ButtonStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.props.strLength,
      bitString: null
    };
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
    // TODO: insert start logic here
    fetch(`http://localhost:8080/rest/randomstring/${this.state.strLength}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ bitString: data.bitString });
      })
      .catch(console.log);
    this.props.updateProps({
      bitString: this.state.bitString
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.start.bind(this, this.state.strLength)}>
          Start, Length: {this.state.strLength}
        </button>
        {/* <p>Bitstring is: {this.state.bitString}</p> */}
      </div>
    );
  }
}

module.exports = ButtonStart;
