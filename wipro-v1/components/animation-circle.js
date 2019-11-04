const React = require("react");
import ReactRough, { Circle } from "react-rough";
import Arrow from "@elsdoerfer/react-arrow";

class AnimationCircle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrowX: this.returnArrowX(this.props.polarisation),
      arrowY: this.returnArrowY(this.props.polarisation),
      arrowLength: this.returnArrowLength(this.props.polarisation)
    };
  }

  componentDidMount = () => {
    setInterval(
      function() {
        this.forceUpdate();
      }.bind(this),
      100
    );
  };

  returnArrowX = args => {
    if (args === 90) {
      return -100;
    } else if (args === 0) {
      return -150;
    } else if (args === 45) {
      return -110;
    } else if (args === 135) {
      return -110;
    }
  };

  returnArrowY = args => {
    if (args === 90) {
      return 50;
    } else if (args === 0) {
      return 10;
    } else if (args === 45) {
      return 40;
    } else if (args === 135) {
      return 90;
    }
  };

  returnArrowLength = args => {
    if (args === 90) {
      return 100;
    } else if (args === 0) {
      return 100;
    } else if (args === 45) {
      return 71;
    } else if (args === 135) {
      return 71;
    }
  };

  render() {
    const newWidth = this.props.x + 100;
    const newHeight = this.props.y + 100;
    const RenderArrow = props => (
      <Arrow
        angle={this.props.polarisation}
        length={100}
        lineWidth={3}
        style={{
          transform: `translate(${this.state.arrowX}px, ${this.state.arrowY}px)`,
          width: `${this.state.arrowLength}px`,
          height: `${this.state.arrowLength}px`
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
