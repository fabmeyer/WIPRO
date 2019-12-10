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

  returnArrowX = args => {
    if (this.props.size === "big") {
      if (args === 0) {
        return 25;
      } else if (args === 90) {
        return 50;
      } else if (args === 45) {
        return 50;
      } else if (args === 135) {
        return 50;
      }
    } else {
      if (args === 0) {
        return -150;
      } else if (args === 90) {
        return -100;
      } else if (args === 45) {
        return -110;
      } else if (args === 135) {
        return -110;
      }
    }
  };

  returnArrowY = args => {
    if (this.props.size === "big") {
      if (args === 0) {
        return -105;
      } else if (args === 90) {
        return -80;
      } else if (args === 45) {
        return -85;
      } else if (args === 135) {
        return -60;
      }
    } else {
      if (args === 0) {
        return 10;
      } else if (args === 90) {
        return 50;
      } else if (args === 45) {
        return 40;
      } else if (args === 135) {
        return 90;
      }
    }
  };

  returnArrowLength = args => {
    if (args === 90 || args === 0) {
      return this.props.x;
    } else if (args === 45 || args === 135) {
      return (Math.sqrt(2) / 2) * this.props.x;
    }
  };

  render() {
    const newWidth = this.props.x * 2;
    const newHeight = this.props.y * 2;
    const RenderArrow = props => (
      <Arrow
        angle={this.props.polarisation}
        length={this.props.x}
        lineWidth={3}
        lineDashed={0.9}
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
            points={[this.props.x, this.props.y, this.props.x * 0.667]}
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
