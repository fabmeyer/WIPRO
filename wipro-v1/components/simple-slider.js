const React = require("react");
import ReactSlider from "react-slider";

class SimpleSlider extends React.PureComponent {
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
              this.props.updateProps({
                settings: props
              });
            }}
            renderThumb={(props, state) => <p {...props}>{state.valueNow}</p>}
            value={this.props.setting}
          />
        </div>
      </div>
    );
  }
}

module.exports = SimpleSlider;
