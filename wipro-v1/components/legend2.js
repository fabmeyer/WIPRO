const React = require("react");
import ReactSlider from "react-slider";

class Legend2 extends React.PureComponent {
  render() {
    const legendStyle = {
      display: "flex",
      justifyContent: "space-around"
    };

    const legendItemStyle = {
      display: "flex",
      alignItems: "baseline",
      paddingRight: "10px"
    };

    return (
      <span style={legendStyle}>
        <span style={legendItemStyle}>
          <canvas
            width="10"
            height="10"
            style={{
              border: "1px solid black",
              backgroundColor: "white",
              height: "10px",
              width: "10px",
              marginRight: "5px"
            }}
          ></canvas>
          <p>correct</p>
        </span>
        <span style={legendItemStyle}>
          <canvas
            width="10"
            height="10"
            style={{
              border: "1px solid black",
              backgroundColor: "orange",
              height: "10px",
              width: "10px",
              marginRight: "5px"
            }}
          ></canvas>
          <p>eavesdropping but results in correct base</p>
        </span>
        <span style={legendItemStyle}>
          <canvas
            width="10"
            height="10"
            style={{
              border: "1px solid black",
              backgroundColor: "red",
              height: "10px",
              width: "10px",
              marginRight: "5px"
            }}
          ></canvas>
          <p>eavesdropping but results in wrong base</p>
        </span>
        <span style={legendItemStyle}>
          <canvas
            width="10"
            height="10"
            style={{
              border: "1px solid black",
              backgroundColor: "yellow",
              height: "10px",
              width: "10px",
              marginRight: "5px"
            }}
          ></canvas>
          <p>wrong base due to noise</p>
        </span>
      </span>
    );
  }
}

module.exports = Legend2;
