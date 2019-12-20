const React = require("react");
import "babel-polyfill";
import Rodal from "rodal";

class ButtonBobBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength),
      rodal: false
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.strLength !== newProps.strLength) {
      this.setState({
        strLength: this.checkType(this.props.strLength)
      });
    }
    if (oldProps.buttonActive !== newProps.buttonActive) {
      this.setState({
        rodal: false
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
    if (this.props.buttonActive !== true) {
      this.rodal();
    } else {
      this.props.updateProps({
        bobBaseHasLoaded: false
      });

      let formData = new FormData();
      formData.append("stringLength", this.checkType(this.props.strLength));
      formData.append("prob", this.props.BobProb);
      const data = new URLSearchParams(formData);

      const getBaseString = async () => {
        const domain = location.port == 3000 ? "http://localhost:8080" : "";
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
  }

  rodal() {
    this.setState(function(prevState) {
      return { rodal: !prevState.rodal };
    });
    this.state.rodal === false
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

  render() {
    let rodal;
    if (this.props.buttonActive == false) {
      rodal = (
        <Rodal
          visible={this.state.rodal}
          onClose={this.rodal.bind(this)}
          width={300}
          height={75}
          measure="px"
        >
          <p>{this.props.rodalText}</p>
        </Rodal>
      );
    } else rodal = <div></div>;

    return (
      <React.Fragment>
        <button className="button-small" onClick={this.start.bind(this)}>
          {this.props.text}, Length: {this.state.strLength}
        </button>
        {rodal}
      </React.Fragment>
    );
  }
}

module.exports = ButtonBobBase;
