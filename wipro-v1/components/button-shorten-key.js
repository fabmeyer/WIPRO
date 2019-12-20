const React = require("react");
import Rodal from "rodal";

class ButtonShortenKey extends React.Component {
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

  shorten() {
    if (this.props.buttonActive !== true) {
      this.rodal();
    } else {
      this.props.updateProps({
        shortenKeyHasLoaded: false,
        comparedBaseHasLoaded: false
      });

      let formData = new FormData();
      formData.append("base1", this.props.baseString1);
      formData.append("base2", this.props.baseString2);
      formData.append("string_alice", this.props.bitString1);
      formData.append("string_bob", this.props.bitString2);
      formData.append("state_string", this.props.stateString);
      const data = new URLSearchParams(formData);

      const getShortenedKey = async () => {
        const domain = location.port == 3000 ? "http://localhost:8080" : "";
        const url = domain + "/rest/post/shortenkey";
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: data
        });
        const content = await res.json();
        const comparedBase = content.comparedBase;
        this.props.updateProps({
          comparedBase: comparedBase
        });
        const commonKeyAlice = content.commonKeyAlice;
        this.props.updateProps({
          commonKeyAlice: commonKeyAlice
        });
        const commonKeyBob = content.commonKeyBob;
        this.props.updateProps({
          commonKeyBob: commonKeyBob
        });
        const stateString2 = content.stateString;
        this.props.updateProps({
          stateString2: stateString2
        });
        const commonKeyLength = commonKeyAlice.length;
        this.props.updateProps({
          commonKeyLength: commonKeyLength
        });
      };
      getShortenedKey();
      this.props.updateProps({
        comparedBaseHasLoaded: true,
        commonKeyHasLoaded: true
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
        <button className="button-small" onClick={this.shorten.bind(this)}>
          {this.props.text}
        </button>
        {rodal}
      </React.Fragment>
    );
  }
}

module.exports = ButtonShortenKey;
