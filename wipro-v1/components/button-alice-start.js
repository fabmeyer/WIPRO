const React = require("react");
import "babel-polyfill";

class ButtonAliceStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength),
      bitString: this.props.bitString,
      baseString: this.props.baseString,
      dataHasLoaded: false
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

  start = () => {
    console.log("start button");
    const data = {
      stringLength: this.checkType(this.props.strLength),
      prob: 50
    };
    this.setState({ dataHasLoaded: false });
    async function getBitString(
      url = "http://localhost:8080/rest/post/randomstring"
    ) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: JSON.stringify(data)
      });
      const content = await res.json();
      console.log(content);
      this.setState({ bitString: content });
      this.props.updateProps({
        bitString: this.state.bitString
      });
    }
    getBitString();

    async function getBaseString(
      url = "http://localhost:8080/rest/post/randombase"
    ) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: JSON.stringify(data)
      });
      const content = await res.json();
      console.log(content);
      this.setState({ baseString: content });
      this.props.updateProps({
        baseString: this.state.baseString
      });
    }
    getBaseString();
    this.setState({ dataHasLoaded: true });
  };

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

module.exports = ButtonAliceStart;
