const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";

class AnimationTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const outerContainer = {
      display: "flex"
    };
    const animationContainer = {
      display: "flex",
      justifyContent: "start"
    };
    return (
      <div style={outerContainer}>
        <Anime
          easing="easeInOutExpo"
          elasticity="0.5"
          duration={2000}
          direction="normal"
          loop={true}
          translateX={200}
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
          translateX={200}
        >
          <span style={animationContainer}>
            <AnimationCircle color="yellow" x={100} y={100}></AnimationCircle>
          </span>
        </Anime>
      </div>
    );
  }
}

module.exports = AnimationTest;
