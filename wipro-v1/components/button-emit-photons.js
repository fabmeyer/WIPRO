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
    let formData = new FormData();
    formData.append("base", this.props.bitString);
    formData.append("str", this.props.baseString);
    formData.append("angle_variance", 0);
    formData.append("length_variance", 0);
    const data = new URLSearchParams(formData);
    this.setState({ dataHasLoaded: false });
    async function getPolarization(
      url = "http://localhost:8080/rest/post/emitphoton"
    ) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
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
