const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";
import AnimationFilter from "./animation-filter";

class AnimationPhoton2 extends React.PureComponent {
  render() {
    const outerContainer = {
      display: "flex",
      justifyContent: "center",
      transform: "translateX(-200px)"
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
          duration={2500}
          direction="normal"
          loop={true}
          translateX={[0, 400]}
        >
          <span style={animationContainer}>
            <AnimationCircle
              color="#FFF200"
              x={200}
              y={110}
              polarisation={45}
            ></AnimationCircle>
          </span>
        </Anime>
        <Anime
          easing="linear"
          duration={2500}
          direction="normal"
          loop={true}
          translateX={[0, 400]}
        >
          <span style={animationContainer}>
            <AnimationCircle
              color="#FFF200"
              x={225}
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

module.exports = AnimationPhoton2;
