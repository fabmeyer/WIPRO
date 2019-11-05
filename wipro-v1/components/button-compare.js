const React = require("react");

class ButtonCompare extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comparedString: null
    };
  }

  compare() {
    fetch(
      `http://localhost:8080/rest/comparebase/${this.props.baseString1}/${this.props.baseString2}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ comparedString: data.compareString });
        this.props.updateProps({
          comparedString: this.state.comparedString
        });
      })
      .catch(console.log);
    console.log(this.state);
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

module.exports = ButtonCompare;
