const React = require("react");

class ButtonMeasure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength)
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
  }

  measure() {
    this.props.updateProps({
      bobStringHasLoaded: false,
      bobDataHasLoaded: false
    });

    let formData = new FormData();
    formData.append("photons", this.props.rawPolarization);
    formData.append("base", this.props.baseString);
    formData.append("fp", 0);
    formData.append("undetected", 0);
    const data = new URLSearchParams(formData);

    const measurePhotons = async () => {
      const url = "http://localhost:8080/rest/post/receivephoton";
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
    };
    measurePhotons();
    this.props.updateProps({
      bobStringHasLoaded: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.measure.bind(this)}>
          {this.props.text}, Length: {this.state.strLength}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonMeasure;
