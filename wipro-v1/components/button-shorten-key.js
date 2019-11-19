const React = require("react");

class ButtonShortenKey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comparedBase: this.props.comparedBase,
      commonKey: this.props.commonKey
    };
  }

  shorten = () => {
    console.log("measure button"); 
    let formData = new FormData();
    formData.append("base1",  this.props.baseString1);
    formData.append("base2", this.props.baseString2);
    formData.append("string_alice", this.props.bitstring);
    const data = new URLSearchParams(formData);

    this.setState({ dataHasLoaded: false });
    async function getShortenedKey(
      url = "http://localhost:8080/rest/post/shortenkey"
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
      this.setState({ comparedBase: content.comparedBase });
      this.props.updateProps({
        comparedBase: this.state.comparedBase
      });
      this.setState({ commonKey: content.commonKey });
      this.props.updateProps({
        commonKey: this.state.commonKey
      });
    }
    getShortenedKey();
    this.setState({ dataHasLoaded: true });
  };

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.compare.bind(this)}>
          {this.props.text}, Length: {this.state.strLength}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonShortenKey;
