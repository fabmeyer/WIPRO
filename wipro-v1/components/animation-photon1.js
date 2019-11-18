const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";
import AnimationFilter from "./animation-filter";

class AnimationPhoton1 extends React.PureComponent {
  render() {
    const outerContainer = {
      display: "flex",
      justifyContent: "center",
      transform: "translateX(-200px)",
      padding: "20px 0"
    };
    const animationContainer = {
      display: "flex",
      justifyContent: "start"
    };
    const filterContainer = {
      position: "absolute",
      transform: "translateX(200px)"
    };
    return (
      <div style={outerContainer}>
        <Anime
          easing="linear"
          duration={5000}
          direction="normal"
          loop={true}
          translateX={[-190, 610]}
        >
          <span style={animationContainer}>
            <AnimationCircle
              color="#FFF200"
              x={175}
              y={110}
              polarisation={0}
            ></AnimationCircle>
          </span>
        </Anime>
        <span style={filterContainer}>
          <AnimationFilter></AnimationFilter>
        </span>
      </div>
    );
  }
}

module.exports = AnimationPhoton1;
