const React = require("react");
import ReactRough, { Circle } from "react-rough";
import Arrow from "@elsdoerfer/react-arrow";

class AnimationCircle extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    setInterval(
      function() {
        this.forceUpdate();
      }.bind(this),
      100
    );
  };

  render() {
    const newWidth = this.props.x + 100;
    const newHeight = this.props.y + 100;
    const RenderArrow = props => (
      <Arrow
        angle={90}
        length={100}
        lineWidth={3}
        style={{
          transform: "translateX(-100px)",
          width: "100px"
        }}
      />
    );
    return (
      <React.Fragment>
        <ReactRough width={newWidth} height={newHeight}>
          <Circle
            points={[this.props.x, this.props.y, 75]}
            fill={this.props.color}
            fillWeight="6"
            fillStyle="hachure"
            strokeWidth="2"
            roughness="2"
            bowing="1"
          />
        </ReactRough>
        <RenderArrow />
      </React.Fragment>
    );
  }
}

module.exports = AnimationCircle;
