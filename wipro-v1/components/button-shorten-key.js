const React = require("react");

class ButtonShortenKey extends React.Component {
  constructor(props) {
    super(props);
  }

  shorten() {
    this.props.updateProps({
      shortenKeyHasLoaded: false
    });

    let formData = new FormData();
    formData.append("base1", this.props.baseString1);
    formData.append("base2", this.props.baseString2);
    formData.append("string_alice", this.props.bitString);
    const data = new URLSearchParams(formData);

    const getShortenedKey = async () => {
      const url = "http://localhost:8080/rest/post/shortenkey";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      console.log(content);
      const comparedBase = content.compareBase;
      this.props.updateProps({
        comparedBase: comparedBase
      });
      const commonKey = content.commonKey;
      this.props.updateProps({
        commonKey: commonKey
      });
    };
    getShortenedKey();
    this.props.updateProps({
      shortenKeyHasLoaded: true
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
