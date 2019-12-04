const React = require("react");
import ReactRough, { Circle, Rectangle, Line } from "react-rough";

class AnimationPerson extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <ReactRough width={120} height={160}>
          <Circle
            points={[60, 40, 40]}
            fill={this.props.color}
            fillWeight="6"
            fillStyle="hachure"
            stroke={this.props.stroke}
            strokeWidth="2"
            roughness="2"
            bowing="1"
          />
          <Rectangle
            points={[55, 60, 10, 60]}
            fill={this.props.color}
            fillWeight="6"
            fillStyle="hachure"
            stroke={this.props.stroke}
            strokeWidth="2"
            roughness="2"
            bowing="0"
          />
          <Line
            points={[55, 80, 20, 60]}
            strokeWidth="2"
            stroke={this.props.stroke}
          />
          <Line
            points={[60, 80, 95, 60]}
            strokeWidth="2"
            stroke={this.props.stroke}
          />
          <Line
            points={[55, 120, 20, 160]}
            strokeWidth="2"
            stroke={this.props.stroke}
          />
          <Line
            points={[60, 120, 95, 160]}
            strokeWidth="2"
            stroke={this.props.stroke}
          />
        </ReactRough>
      </div>
    );
  }
}

module.exports = AnimationPerson;
