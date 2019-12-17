const React = require("react");

class ButtonCompareKey extends React.Component {
  constructor(props) {
    super(props);
  }

  shorten() {
    this.props.updateProps({
      restKeyHasLoaded: false
    });

    let formData = new FormData();
    formData.append("key1", this.props.bitString1);
    formData.append("key2", this.props.bitString2);
    formData.append("percentage", this.props.percentage);
    const data = new URLSearchParams(formData);

    const getRestKey = async () => {
      const url = "/rest/post/comparekey";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      const restKeyAlice = content.restKeyAlice;
      this.props.updateProps({
        restKeyAlice: restKeyAlice
      });
      const restKeyBob = content.restKeyBob;
      this.props.updateProps({
        restKeyBob: restKeyBob
      });
      const match = content.match / 100;
      this.props.updateProps({
        match: match
      });
      const restKeyLength = restKeyAlice.length;
      this.props.updateProps({
        restKeyLength: restKeyLength
      });
    };
    getRestKey();
    this.props.updateProps({
      restKeyHasLoaded: true
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

module.exports = ButtonCompareKey;
