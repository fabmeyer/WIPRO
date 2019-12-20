const React = require("react");
import "babel-polyfill";
import Rodal from "rodal";

class ButtonEmitPhotons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rodal: false
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.buttonActive !== newProps.buttonActive) {
      this.setState({
        rodal: false
      });
    }
  }

  emit() {
    if (this.props.buttonActive !== true) {
      this.rodal();
    } else {
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
        const domain = location.port == 3000 ? "http://localhost:8080" : "";
        const url = domain + "/rest/post/emitphoton";

        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: data
        });
        const content = await res.json();
        const photonString = content.photonString;
        this.props.updateProps({
          rawPolarization: photonString
        });
        const photonArray = photonString.split(",");
        this.props.updateProps({
          polarization: photonArray
        });
      };
      getPolarization();
      this.props.updateProps({
        polarizationHasLoaded: true
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
        <button className="button-small" onClick={this.emit.bind(this)}>
          {this.props.text}
        </button>
        {rodal}
      </React.Fragment>
    );
  }
}

module.exports = ButtonEmitPhotons;
