const React = require("react");
import "babel-polyfill";

class ButtonAliceStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength),
      bitString: null,
      baseString: null,
      dataHasLoaded: false
    };

    this.start = this.start.bind(this);
  }

  checkType = arg => {
    if (typeof arg !== "number") {
      return eval(arg);
    } else {
      return arg;
    }
  };

  componentDidMount() {
    console.log("props", this.props);
    console.log("state", this.state);
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
    console.log(this);
    console.log("start button");
    let formData = new FormData();
    formData.append("stringLength", this.checkType(this.props.strLength));
    formData.append("prob", 50);
    const data = new URLSearchParams(formData);
    this.setState({ dataHasLoaded: false });

    const getBitString = async () => {
      const url = "http://localhost:8080/rest/post/randomstring";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      const bitString = content.bitString;
      console.log("getting bitstring", bitString);
      this.setState({ bitString: bitString });
      this.props.updateProps({
        bitString: this.state.bitString
      });
    };
    getBitString();

    const getBaseString = async () => {
      const url = "http://localhost:8080/rest/post/randombase";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      const baseString = content.baseString;
      console.log("getting basestring", baseString);
      this.setState({ baseString: baseString });
      this.props.updateProps({
        baseString: this.state.baseString
      });
    };
    getBaseString();
    this.setState({ dataHasLoaded: true });
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

module.exports = ButtonAliceStart;
