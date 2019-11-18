const React = require("react");
import "babel-polyfill";

class ButtonEmitPhotons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bitString: this.props.bitString,
      baseString: this.props.baseString,
      polarization: this.props.polarization,
      dataHasLoaded: false
    };
  }

  emit = () => {
    console.log("emit button");
    const data = {
      base: this.props.bitString,
      str: this.props.baseString,
      angle_variance: 0,
      legth_variance: 0
    };
    this.setState({ dataHasLoaded: false });
    async function getPolarization(
      url = "http://localhost:8080/rest/post/emitphoton"
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
      this.setState({ polarization: content });
      this.props.updateProps({
        polarization: this.state.polarization
      });
    }
    getPolarization();
  };

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.emit.bind(this)}>
          {this.props.text}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonEmitPhotons;
