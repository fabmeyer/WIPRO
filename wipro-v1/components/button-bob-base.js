const React = require("react");
import "babel-polyfill";

class ButtonBobBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength),
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

module.exports = ButtonBobBase;
