const React = require("react");
import "babel-polyfill";

class ButtonEmitPhotons extends React.Component {
  constructor(props) {
    super(props);

    this.emit = this.emit.bind(this);
  }

  emit() {
    console.log("emit button");
    this.props.updateProps({
      polarizationHasLoaded: false
    });

    let formData = new FormData();
    formData.append("str", this.props.bitString);
    formData.append("base", this.props.baseString);
    formData.append("angle_variance", 0);
    formData.append("length_variance", 0);
    const data = new URLSearchParams(formData);

    const getPolarization = async () => {
      const url = "http://localhost:8080/rest/post/emitphoton";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      console.log(content);
      const photonString = content.photonString;
      const photonArray = photonString.split(";");
      console.log(photonArray);
    };
    getPolarization();
  }

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
