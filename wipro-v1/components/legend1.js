const React = require("react");
import ReactSlider from "react-slider";

class Legend1 extends React.PureComponent {
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
          <p>same base</p>
        </span>
        <span style={legendItemStyle}>
          <canvas
            width="10"
            height="10"
            style={{
              border: "1px solid black",
              backgroundColor: "grey",
              height: "10px",
              width: "10px",
              marginRight: "5px"
            }}
          ></canvas>
          <p>different base</p>
        </span>
      </span>
    );
  }
}

module.exports = Legend1;
