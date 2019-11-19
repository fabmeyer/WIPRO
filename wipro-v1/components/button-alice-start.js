const React = require("react");
import "babel-polyfill";

class ButtonAliceStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength)
    };
  }

  componentDidMount() {
    if (this.props.autostart) {
      this.start();
    }
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
      dataHasLoaded: false
    });

    let formData = new FormData();
    formData.append("stringLength", this.checkType(this.props.strLength));
    formData.append("prob", 50);
    const data = new URLSearchParams(formData);

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
      this.props.updateProps({
        bitString: bitString
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
      this.props.updateProps({
        baseString: baseString
      });
    };
    getBaseString();
    this.props.updateProps({
      dataHasLoaded: true
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

module.exports = ButtonAliceStart;
