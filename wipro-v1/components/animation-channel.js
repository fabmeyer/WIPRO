const React = require("react");
import ReactRough, { Rectangle } from "react-rough";

class AnimationChannel extends React.PureComponent {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <ReactRough width={640} height={40}>
        <Rectangle
          points={[10, 10, 600, 10]}
          fill="lightgrey"
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
