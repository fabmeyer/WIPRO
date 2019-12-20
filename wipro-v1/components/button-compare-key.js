const React = require("react");
import Rodal from "rodal";

class ButtonCompareKey extends React.Component {
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
        restKeyHasLoaded: false
      });

      let formData = new FormData();
      formData.append("key1", this.props.bitString1);
      formData.append("key2", this.props.bitString2);
      formData.append("percentage", this.props.percentage);
      formData.append("state_string", this.props.stateString);
      const data = new URLSearchParams(formData);

      const getRestKey = async () => {
        const domain = location.port == 3000 ? "http://localhost:8080" : "";
        const url = domain + "/rest/post/comparekey";

        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: data
        });
        const content = await res.json();
        console.log("content: ", content);
        const restKeyAlice = content.restKeyAlice;
        this.props.updateProps({
          restKeyAlice: restKeyAlice
        });
        const restKeyBob = content.restKeyBob;
        this.props.updateProps({
          restKeyBob: restKeyBob
        });
        const colorKey = content.colorString;
        this.props.updateProps({
          colorKey: colorKey
        });
        const match = content.match / 100;
        this.props.updateProps({
          match: match
        });
        const restKeyLength = restKeyAlice.length;
        this.props.updateProps({
          restKeyLength: restKeyLength
        });
        const relativeLength = restKeyLength / this.props.strLength;
        this.props.updateProps({
          relativeLength: relativeLength
        });
      };
      getRestKey();
      this.props.updateProps({
        restKeyHasLoaded: true
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

module.exports = ButtonCompareKey;
