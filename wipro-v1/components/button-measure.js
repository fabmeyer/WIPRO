const React = require("react");

class ButtonMeasure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      polarization: this.props.polarization,
      measuredString: this.props.measuredString
    };
  }

  measure = () => {
    console.log("measure button");
    const data = {
      photons: this.props.polarization,
      base: this.props.baseString,
      fp: 0,
      undetected: 0
    };
    this.setState({ dataHasLoaded: false });
    async function getPolarization(
      url = "http://localhost:8080/rest/post/receivephoton"
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
      this.setState({ measuredString: content });
      this.props.updateProps({
        measuredString: this.state.measuredString
      });
    }
    getPolarization();
    this.setState({ dataHasLoaded: true });
  };

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
