const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";

class AnimationTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const animationContainer = {
      position: "absolute"
    };
    return (
      <React.Fragment>
        <Anime
          easing="easeInOutExpo"
          elasticity="0.5"
          duration={2000}
          direction="normal"
          loop={true}
          translateX={300}
        >
          <span style={animationContainer}>
            <AnimationCircle color="yellow" x={100} y={100}></AnimationCircle>
          </span>
        </Anime>
        <Anime
          easing="easeInOutExpo"
          elasticity="0.5"
          duration={2000}
          direction="normal"
          loop={true}
          translateX={300}
        >
          <span style={animationContainer}>
            <AnimationCircle color="yellow" x={400} y={100}></AnimationCircle>
          </span>
        </Anime>
      </React.Fragment>
    );
  }
}

module.exports = AnimationTest;
