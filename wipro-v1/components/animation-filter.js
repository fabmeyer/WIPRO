const React = require("react");
import ReactRough, { Rectangle } from "react-rough";

class AnimationFilter extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <ReactRough width={190} height={220}>
          <Rectangle
            points={[10, 10, 10, 200]}
            fill="grey"
            fillWeight="6"
            fillStyle="hachure"
            strokeWidth="2"
            roughness="2"
            bowing="1"
          />
          <Rectangle
            points={[50, 10, 10, 200]}
            fill="grey"
            fillWeight="6"
            fillStyle="hachure"
            strokeWidth="2"
            roughness="2"
            bowing="1"
          />
          <Rectangle
            points={[90, 10, 10, 200]}
            fill="grey"
            fillWeight="6"
            fillStyle="hachure"
            strokeWidth="2"
            roughness="2"
            bowing="1"
          />
          <Rectangle
            points={[130, 10, 10, 200]}
            fill="grey"
            fillWeight="6"
            fillStyle="hachure"
            strokeWidth="2"
            roughness="2"
            bowing="1"
          />
          <Rectangle
            points={[170, 10, 10, 200]}
            fill="grey"
            fillWeight="6"
            fillStyle="hachure"
            strokeWidth="2"
            roughness="2"
            bowing="1"
          />
        </ReactRough>
      </React.Fragment>
    );
  }
}

module.exports = AnimationFilter;
