const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";
import AnimationFilter from "./animation-filter";

class AnimationPhoton1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const outerContainer = {
      display: "flex",
      justifyContent: "center"
    };
    const animationContainer = {
      display: "flex",
      justifyContent: "start"
    };
    return (
      <div style={outerContainer}>
        <Anime
          easing="linear"
          elasticity="0"
          duration={5000}
          direction="normal"
          loop={true}
          translateX={[0, 800]}
          opacity={[1, 1, 1, 0]}
        >
          <span style={animationContainer}>
            <AnimationCircle
              color="#FFF200"
              x={100}
              y={100}
              polarisation={0}
            ></AnimationCircle>
          </span>
        </Anime>
        <AnimationFilter></AnimationFilter>
      </div>
    );
  }
}

module.exports = AnimationPhoton1;
