const React = require("react");
import ReactRough, { Rectangle } from "react-rough";
import ReactSlider from "react-slider";

class SystemOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strLength: this.checkType(this.props.strLength),
      bitString: this.props.bitString,
      baseString: this.props.baseString,
      aliceProb: this.props.aliceProb,
      bobProb: this.props.bobProb,
      dataHasLoaded: false
    };
  }

  checkType = arg => {
    if (typeof arg !== "number") {
      return eval(arg);
    } else {
      return arg;
    }
  };

  settings = () => {
    const data = {
      stringLength: this.checkType(this.props.strLength),
      noise: this.props.noise,
      frequency: this.props.frequency,
      error: this.props.error
    };
    async function postData(url = "http://localhost:8080/rest/post/settings") {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: JSON.stringify(data)
      });
    }
    postData();
  };

  render() {
    const overviewContainer = {
      backgroundColor: "#FEF9FF",
      border: "1px solid #CCC"
    };

    const titleStyle = {
      paddingLeft: "1em"
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
      justifyContent: "center"
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
            <span>
              <p style={textStyle}>Frequency</p>
              <ReactSlider
                className="horizontal-slider overview-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                onChange={props => {
                  this.props.updateProps({
                    frequency: props
                  });
                }}
                renderThumb={(props, state) => (
                  <p {...props}>{state.valueNow}</p>
                )}
                defaultValue={this.props.frequency}
                style={{ width: "500px" }}
              />
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
                style={{ width: "100px" }}
              />
            </div>
            <div>
              <div style={container} style={{ paddingBottom: "20px" }}>
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
                  style={{ width: "500px" }}
                />
              </div>
              <div style={container}>
                <p style={textStyle}>Channel</p>
                <ReactRough width={640} height={80}>
                  <Rectangle
                    points={[10, 10, 600, 20]}
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
                    style={{ width: "500px" }}
                  />
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
                style={{ width: "100px" }}
              />
            </div>
          </div>
        </div>
        <button className="button-small" onClick={this.settings.bind(this)}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

module.exports = SystemOverview;
