const React = require("react");
import ReactSlider from "react-slider";

class SimpleSlider extends React.PureComponent {
  render() {
    const sliderStyle = {
      width: "150px"
    };

    return (
      <div
        style={{
          display: "flex",
          margin: "10px 0"
        }}
      >
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
                setting: props
              });
            }}
            renderThumb={(props, state) => <p {...props}>{state.valueNow}</p>}
            value={this.props.setting}
            max={this.props.max}
          />
        </div>
      </div>
    );
  }
}

module.exports = SimpleSlider;
