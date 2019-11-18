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

  componentDidMount = () => {
    console.log(this.state);
  };

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
    console.log(JSON.stringify(data));
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
      border: "1px solid #ccc"
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
      borderBottom: "1px solid #ccc",
      paddingBottom: "10px"
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

    const children = React.Children.toArray(this.props.children);
    const textInput = children[0];

    return (
      <div style={overviewContainer}>
        <h2 style={titleStyle}>General options:</h2>
        <div className="generalComponents" style={generalContainer}>
          <span>
            <p>Length of string:</p>
            {textInput}
          </span>
          <span>
            <p>Frequency</p>
            <ReactSlider
              className="horizontal-slider overview-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              onChange={props => {
                this.props.updateProps({
                  frequency: props
                });
              }}
              renderThumb={(props, state) => <p {...props}>{state.valueNow}</p>}
              defaultValue={this.props.frequency}
              style={{ width: "500px" }}
            />
          </span>
        </div>
        <h2 style={titleStyle}>Specific options:</h2>
        <div className="specificComponents" style={specificContainer}>
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
            <p>Ratio between orthogonal and diagonal base</p>
            <ReactSlider
              className="horizontal-slider small-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              onChange={props => {
                this.props.updateProps({
                  aliceProb: props
                });
              }}
              renderThumb={(props, state) => <p {...props}>{state.valueNow}</p>}
              defaultValue={this.props.aliceProb}
              style={{ width: "200px" }}
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
            <p>Ratio between orthogonal and diagonal base</p>
            <ReactSlider
              className="horizontal-slider small-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              onChange={props => {
                this.props.updateProps({
                  bobProb: props
                });
              }}
              renderThumb={(props, state) => <p {...props}>{state.valueNow}</p>}
              defaultValue={this.props.bobProb}
              style={{ width: "200px" }}
            />
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
