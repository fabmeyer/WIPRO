const React = require("react");

class ButtonShortenKey extends React.Component {
  constructor(props) {
    super(props);
  }

  shorten() {
    this.props.updateProps({
      shortenKeyHasLoaded: false,
      comparedBaseHasLoaded: false
    });

    let formData = new FormData();
    formData.append("base1", this.props.baseString1);
    formData.append("base2", this.props.baseString2);
    formData.append("string_alice", this.props.bitString1);
    formData.append("string_bob", this.props.bitString2);
    const data = new URLSearchParams(formData);

    const getShortenedKey = async () => {
      const domain = (location.port == 3000) ? "http://localhost:8080" : "";
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

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.shorten.bind(this)}>
          {this.props.text}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonShortenKey;
