const React = require("react");
import ReactSlider from "react-slider";

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: this.props.setting
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const newProps = this.props;
    if (prevProps.setting !== newProps.setting) {
      this.setState({ setting: newProps.setting });
    }
    if (prevState.setting !== this.state.setting) {
      this.props.updateProps({
        setting: this.state.setting
      });
    }
  }

  render() {
    const sliderStyle = {
      width: "150px"
    };

    return (
      <div>
        <p
          style={{
            margin: "0 1em 0 0"
          }}
        >
          {this.props.text}
        </p>
        <div style={sliderStyle}>
          <ReactSlider
            className="horizontal-slider overview-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            onChange={props => {
              this.setState({ setting: props });
            }}
            renderThumb={(props, state) => <p {...props}>{state.valueNow}</p>}
            value={this.state.setting}
          />
        </div>
      </div>
    );
  }
}

module.exports = SimpleSlider;
