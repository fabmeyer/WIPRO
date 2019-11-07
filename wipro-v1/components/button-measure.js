const React = require("react");

class ButtonMeasure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      measuredString: null
    };
  }

  measure() {
    fetch(
      `http://localhost:8080/rest/receivephoton/${this.props.bitString}/${this.props.baseString}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ measuredString: data.bitString });
        this.props.updateProps({
          measuredString: this.state.measuredString
        });
        console.log(this.state);
      })
      .catch(console.log);
  }

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.measure.bind(this)}>
          {this.props.text}, Length: {this.state.strLength}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonMeasure;
