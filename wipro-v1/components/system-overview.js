const React = require("react");
import ReactRough, { Rectangle } from "react-rough";
import Dropdown from "react-dropdown";
import ReactSlider from "react-slider";

class SystemOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noise: this.props.noise
    };
  }

  componentDidUpdate(oldState) {
    const newState = this.state;
    if (oldState.noise !== newState.noise) {
      this.props.updateProps({
        noise: this.state.noise
      });
    }
  }

  render() {
    const overviewContainer = {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto",
      textAlign: "center",
      verticalAlign: "middle",
      backgroundColor: "#FEF9FF",
      border: "1px solid #ccc",
      padding: "10px 0"
    };

    const noiseContainer = {
      display: "flex",
      transform: "translateY(-100px)"
    };

    const variables = {
      containerWidth: "240",
      containerHeight: "240",
      width: "200",
      height: "200"
    };

    // insert options here
    const options = ["one", "two", "three"];

    return (
      <div style={overviewContainer}>
        <div>
          <p>Alice</p>
          <ReactRough
            width={eval(variables.containerWidth)}
            height={eval(variables.containerHeight)}
          >
            <Rectangle
              points={[20, 20, eval(variables.width), eval(variables.height)]}
              fill="yellow"
              fillWeight="6"
              fillStyle="hachure"
              strokeWidth="2"
              roughness="2"
              bowing="0"
            />
          </ReactRough>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={null}
            placeholder="Select photon generator"
          />
        </div>
        <div>
          <p>Channel</p>
          <ReactRough width={640} height={240}>
            <Rectangle
              points={[20, 110, 600, 20]}
              fill="grey"
              fillWeight="6"
              fillStyle="hachure"
              strokeWidth="2"
              roughness="2"
              bowing="0"
            />
          </ReactRough>
          <div style={noiseContainer}>
            <p
              style={{
                width: "100px",
                margin: "0"
              }}
            >
              Set noise
            </p>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              onChange={props => {
                this.setState({
                  noise: props
                });
              }}
              renderThumb={(props, state) => <p {...props}>{state.valueNow}</p>}
              defaultValue={this.state.noise}
              style={{ cursor: "pointer", width: "500px" }}
            />
          </div>
        </div>
        <div>
          <p>Bob</p>
          <ReactRough width={240} height={240}>
            <Rectangle
              points={[20, 20, 200, 200]}
              fill="red"
              fillWeight="6"
              fillStyle="hachure"
              strokeWidth="2"
              roughness="2"
              bowing="0"
            />
          </ReactRough>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={null}
            placeholder="Select photon detector"
          />
        </div>
      </div>
    );
  }
}

module.exports = SystemOverview;
