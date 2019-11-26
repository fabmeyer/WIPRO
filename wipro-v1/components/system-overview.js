const React = require("react");
import ReactRough, { Rectangle } from "react-rough";
import ReactSlider from "react-slider";
import ButtonSettings from "./button-settings";

class SystemOverview extends React.PureComponent {
  render() {
    const overviewContainer = {
      backgroundColor: "#FEF9FF",
      border: "1px solid #CCC"
    };

    const titleStyle = {
      padding: "0 1em",
      margin: "1em"
    };

    const generalContainer = {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto",
      textAlign: "center",
      verticalAlign: "middle",
      paddingBottom: "10px",
      borderBottom: "1px solid #CCC"
    };

    const specificContainer = {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto",
      textAlign: "center",
      verticalAlign: "middle",
      paddingBottom: "10px"
    };

    const noiseContainer = {
      display: "flex",
      transform: "translateY(-40px)"
    };

    const variables = {
      containerWidth: "120",
      containerHeight: "120",
      width: "100",
      height: "100"
    };

    const textStyle = {
      padding: "0",
      margin: "0"
    };

    const container = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "1em"
    };

    const sliderStyle = {
      width: "150px"
    };

    const children = React.Children.toArray(this.props.children);
    const textInput = children[0];

    return (
      <div style={overviewContainer}>
        <h4 style={titleStyle}>General options:</h4>
        <div className="generalComponents">
          <div style={generalContainer}>
            <span>
              <p style={textStyle}>Length of string:</p>
              {textInput}
            </span>
          </div>
        </div>
        <h4 style={titleStyle}>Specific options:</h4>
        <div className="specificComponents">
          <div style={specificContainer}>
            <div style={container}>
              <p style={textStyle}>Alice</p>
              <div>
                <ReactRough
                  width={eval(variables.containerWidth)}
                  height={eval(variables.containerHeight)}
                >
                  <Rectangle
                    points={[
                      10,
                      10,
                      eval(variables.width),
                      eval(variables.height)
                    ]}
                    fill="yellow"
                    fillWeight="6"
                    fillStyle="hachure"
                    strokeWidth="2"
                    roughness="2"
                    bowing="0"
                  />
                </ReactRough>
              </div>
              <p style={textStyle}>
                Ratio between orthogonal and diagonal base
              </p>
              <div style={sliderStyle}>
                <ReactSlider
                  className="horizontal-slider small-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  onChange={props => {
                    this.props.updateProps({
                      aliceProb: props
                    });
                  }}
                  renderThumb={(props, state) => (
                    <p {...props}>{state.valueNow}</p>
                  )}
                  defaultValue={this.props.aliceProb}
                />
              </div>
            </div>
            <div style={container}>
              <div style={container}>
                <p style={textStyle}>Eve</p>
                <div>
                  <ReactRough width={120} height={120}>
                    <Rectangle
                      points={[10, 10, 100, 100]}
                      fill="rgba(255, 0, 0, 0.25)"
                      fillWeight="6"
                      fillStyle="dashed"
                      stroke="rgba(0, 0, 0, 0.25)"
                      strokeWidth="2"
                      roughness="2"
                      bowing="0"
                    />
                  </ReactRough>
                </div>
                <p style={textStyle}>Eavesdropping ratio</p>
                <div style={sliderStyle}>
                  <ReactSlider
                    className="horizontal-slider small-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    onChange={props => {
                      this.props.updateProps({
                        eavesdropping: props
                      });
                    }}
                    renderThumb={(props, state) => (
                      <p {...props}>{state.valueNow}</p>
                    )}
                    defaultValue={this.props.eavesdropping}
                  />
                </div>
              </div>
              <div style={container}>
                <p style={textStyle}>Channel</p>
                <ReactRough width={640} height={80}>
                  <Rectangle
                    points={[10, 10, 600, 20]}
                    fill="lightgrey"
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
                      margin: "0 1em 0 0"
                    }}
                  >
                    Set noise
                  </p>
                  <div style={sliderStyle}>
                    <ReactSlider
                      className="horizontal-slider overview-slider"
                      thumbClassName="example-thumb"
                      trackClassName="example-track"
                      onChange={props => {
                        this.props.updateProps({
                          noise: props
                        });
                      }}
                      renderThumb={(props, state) => (
                        <p {...props}>{state.valueNow}</p>
                      )}
                      defaultValue={this.props.noise}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={container}>
              <p style={textStyle}>Bob</p>
              <div>
                <ReactRough
                  width={eval(variables.containerWidth)}
                  height={eval(variables.containerHeight)}
                >
                  <Rectangle
                    points={[
                      10,
                      10,
                      eval(variables.width),
                      eval(variables.height)
                    ]}
                    fill="blue"
                    fillWeight="6"
                    fillStyle="hachure"
                    strokeWidth="2"
                    roughness="2"
                    bowing="0"
                  />
                </ReactRough>
              </div>
              <p style={textStyle}>
                Ratio between orthogonal and diagonal base
              </p>
              <div style={sliderStyle}>
                <ReactSlider
                  className="horizontal-slider small-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  onChange={props => {
                    this.props.updateProps({
                      bobProb: props
                    });
                  }}
                  renderThumb={(props, state) => (
                    <p {...props}>{state.valueNow}</p>
                  )}
                  defaultValue={this.props.bobProb}
                />
              </div>
            </div>
          </div>
        </div>
        <ButtonSettings text={this.props.text}></ButtonSettings>
      </div>
    );
  }
}

module.exports = SystemOverview;
