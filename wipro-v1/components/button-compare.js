const React = require("react");

class ButtonShortenKey extends React.Component {
  constructor(props) {
    super(props);
  }

  compare() {
    this.props.updateProps({
      dataHasLoaded: false
    });

    let formData = new FormData();
    formData.append("base1", this.props.baseString1);
    formData.append("base2", this.props.baseString2);
    const data = new URLSearchParams(formData);

    const getComparedBase = async () => {
      const url = "http://localhost:8080/rest/post/comparebase";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      const compareString = content.compareString;
      this.props.updateProps({
        comparedBase: compareString
      });
    };
    getComparedBase();
    this.props.updateProps({
      dataHasLoaded: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.compare.bind(this)}>
          {this.props.text}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonShortenKey;
