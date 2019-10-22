const React = require("react");

class ButtonStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.props.strLength
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
    fetch("http://localhost:8080/rest/randomstring/16")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(console.log);
    this.props.updateProps({});
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
