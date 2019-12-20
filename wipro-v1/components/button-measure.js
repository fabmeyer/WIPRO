const React = require("react");
import Rodal from "rodal";

class ButtonMeasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strLength: this.checkType(this.props.strLength),
      rodal: false
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
        strLength: this.checkType(this.props.strLength)
      });
    }
    if (
      this.props.bobBaseHasLoaded === true &&
      this.props.bobStringHasLoaded === true
    ) {
      this.props.updateProps({
        bobDataHasLoaded: true
      });
    }
    if (oldProps.buttonActive !== newProps.buttonActive) {
      this.setState({
        rodal: false
      });
    }
  }

  measure() {
    if (this.props.buttonActive !== true) {
      this.rodal();
    } else {
      this.props.updateProps({
        bobStringHasLoaded: false,
        bobDataHasLoaded: false
      });

      let formData = new FormData();
      formData.append("photons", this.props.rawPolarization);
      formData.append("base", this.props.baseString);
      formData.append("fp", 0);
      formData.append("undetected", 0);
      formData.append("noise", this.props.noise);
      formData.append("eavesdropping", this.props.eavesdropping);
      const data = new URLSearchParams(formData);

      const measurePhotons = async () => {
        console.log(location.port == 3000);
        const domain = location.port == 3000 ? "http://localhost:8080" : "";
        const url = domain + "/rest/post/receivephoton";

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
          measuredString: bitString
        });
        const stateString = content.stateString;
        this.props.updateProps({
          stateString: stateString
        });
      };
      measurePhotons();
      this.props.updateProps({
        bobStringHasLoaded: true
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
        <button className="button-small" onClick={this.measure.bind(this)}>
          {this.props.text}, Length: {this.state.strLength}
        </button>
        {rodal}
      </React.Fragment>
    );
  }
}

module.exports = ButtonMeasure;
