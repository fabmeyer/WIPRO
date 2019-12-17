const React = require("react");

class ButtonSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength),
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

  settings = () => {
    const data = {
      stringLength: this.checkType(this.props.strLength),
      noise: this.props.noise,
      eavesdropping: this.props.eavesdropping
    };
    async function postData(url = "/rest/post/settings") {
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
      <button className="button-small" onClick={this.settings.bind(this)}>
        {this.props.text}
      </button>
    );
  }
}

module.exports = ButtonSettings;
