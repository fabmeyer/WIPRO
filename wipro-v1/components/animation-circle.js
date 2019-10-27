const React = require("react");
import ReactRough, { Circle } from "react-rough";

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
    return (
      <React.Fragment>
        <ReactRough width={newWidth} height={newHeight}>
          <Circle
            points={[this.props.x, this.props.y, 100]}
            fill={this.props.color}
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

module.exports = AnimationCircle;
