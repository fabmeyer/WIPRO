const React = require("react");
import AnimationCircle from "./animation-circle";

class InformationBox extends React.PureComponent {
  state = {};
  render() {
    const container = {
      overflow: "initial"
    };

    const circleContainer = {
      height: "100px"
    };

    const textStyle = {
      fontSize: "16px",
      fontFamily: `"Fira Code", monospace`,
      fontVariantLigatures: "none"
    };

    return (
      <div>
        <table style={container}>
          <tr>
            <td>Alice's bit</td>
            <td style={textStyle}>0</td>
            <td style={textStyle}>1</td>
            <td style={textStyle}>0</td>
            <td style={textStyle}>1</td>
          </tr>
          <tr>
            <td>Alice's basis</td>
            <td style={textStyle}>+</td>
            <td style={textStyle}>+</td>
            <td style={textStyle}>x</td>
            <td style={textStyle}>x</td>
          </tr>
          <tr>
            <td>Alice's polarization</td>
            <td>0°</td>
            <td>45°</td>
            <td>90°</td>
            <td>135°</td>
          </tr>
          <tr>
            <td>Alice's photon</td>
            <td>
              <div style={circleContainer}>
                <AnimationCircle
                  color="#FFF200"
                  x={50}
                  y={50}
                  polarisation={0}
                  size={this.props.size}
                ></AnimationCircle>
              </div>
            </td>
            <td>
              <div style={circleContainer}>
                <AnimationCircle
                  color="#FFF200"
                  x={50}
                  y={50}
                  polarisation={90}
                  size={this.props.size}
                ></AnimationCircle>
              </div>
            </td>
            <td>
              <div style={circleContainer}>
                <AnimationCircle
                  color="#FFF200"
                  x={50}
                  y={50}
                  polarisation={45}
                  size={this.props.size}
                ></AnimationCircle>
              </div>
            </td>
            <td>
              <div style={circleContainer}>
                <AnimationCircle
                  color="#FFF200"
                  x={50}
                  y={50}
                  polarisation={135}
                  size={this.props.size}
                ></AnimationCircle>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default InformationBox;
