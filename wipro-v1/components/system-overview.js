const React = require("react");
import ReactSlider from "react-slider";
import ButtonSettings from "./button-settings";
import AnimationPerson from "./animation-person";
import AnimationChannel from "./animation-channel";

class SystemOverview extends React.PureComponent {
  render() {
    const overviewContainer = {
      backgroundColor: "#FEF9FF",
      border: "1px solid #CCC"
    };

    const titleStyle = {
      padding: "0 1em",
      margin: "0.5em"
    };

    const generalContainer = {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto",
      textAlign: "center",
      verticalAlign: "middle",
      paddingBottom: "5px",
      borderBottom: "1px solid #CCC"
    };

    const specificContainer = {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto",
      textAlign: "center",
      verticalAlign: "middle",
      paddingBottom: "5px"
    };

    const noiseContainer = {
      display: "flex",
      transform: "translateY(-50px)"
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
      paddingBottom: "0.5em"
    };

    const sliderStyle = {
      width: "150px"
    };

    const eavesdroppingStyle = {
      paddingBottom: "1em"
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
              <AnimationPerson
                color="GreenYellow"
                stroke="black"
              ></AnimationPerson>
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
                      AliceProb: props
                    });
                  }}
                  renderThumb={(props, state) => (
                    <p {...props}>{state.valueNow}</p>
                  )}
                  defaultValue={this.props.AliceProb}
                />
              </div>
            </div>
            <div style={container}>
              <div style={eavesdroppingStyle}>
                <div style={container}>
                  <p style={textStyle}>Eve</p>
                  <AnimationPerson
                    color="rgba(255, 0, 0, 0.25)"
                    stroke="rgb(191, 191, 191)"
                  ></AnimationPerson>
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
                      value={this.props.eavesdropping}
                    />
                  </div>
                </div>
              </div>
              <div style={container}>
                <p style={textStyle}>Channel</p>
                <AnimationChannel></AnimationChannel>
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
                      value={this.props.noise}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={container}>
              <p style={textStyle}>Bob</p>
              <AnimationPerson
                color="DodgerBlue"
                stroke="black"
              ></AnimationPerson>
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
                      BobProb: props
                    });
                  }}
                  renderThumb={(props, state) => (
                    <p {...props}>{state.valueNow}</p>
                  )}
                  defaultValue={this.props.BobProb}
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
