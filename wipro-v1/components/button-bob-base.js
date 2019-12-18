const React = require("react");
import "babel-polyfill";

class ButtonBobBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength)
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.strLength !== newProps.strLength) {
      this.setState({
        strLength: this.checkType(this.props.strLength)
      });
    }
  }

  checkType = arg => {
    if (typeof arg !== "number") {
      return eval(arg);
    } else {
      return arg;
    }
  };

  start() {
    this.props.updateProps({
      bobBaseHasLoaded: false
    });

    let formData = new FormData();
    formData.append("stringLength", this.checkType(this.props.strLength));
    formData.append("prob", this.props.BobProb);
    const data = new URLSearchParams(formData);

    const getBaseString = async () => {
      const domain = (location.port == 3000) ? "http://localhost:8080" : "";
      const url = domain + "/rest/post/randombase";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      const baseString = content.baseString;
      this.props.updateProps({
        baseString: baseString
      });
    };
    getBaseString();
    this.props.updateProps({
      bobBaseHasLoaded: true
    });
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

module.exports = ButtonBobBase;
