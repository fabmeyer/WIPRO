const React = require("react");
import ReactRough, { Rectangle } from "react-rough";

class AnimationChannel extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ReactRough width={640} height={20}>
        <Rectangle
          points={[10, 5, 600, 10]}
          fill={this.props.color}
          fillWeight="6"
          fillStyle="hachure"
          strokeWidth="2"
          roughness="2"
          bowing="0"
        />
      </ReactRough>
    );
  }
}

module.exports = AnimationChannel;
