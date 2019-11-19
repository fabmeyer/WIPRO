const React = require("react");
import "babel-polyfill";

class ButtonSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength),
      bitString: this.props.bitString,
      baseString: this.props.baseString,
      dataHasLoaded: false
    };
  }

  componentDidMount = () => {
    console.log(this.state);
  };

  checkType = arg => {
    if (typeof arg !== "number") {
      return eval(arg);
    } else {
      return arg;
    }
  };

  settings = () => {
    const data = {
      stringLength: this.checkType(this.props.strLength),
      noise: this.props.noise,
      frequency: this.props.frequency,
      error: this.props.error
    };
    console.log(JSON.stringify(data));
    async function postData(url = "http://localhost:8080/rest/post/settings") {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: JSON.stringify(data)
      });
    }
    postData();
  };

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.settings.bind(this)}>
          {this.props.text}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonSettings;
