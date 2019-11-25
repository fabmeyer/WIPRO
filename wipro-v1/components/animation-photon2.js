const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";
import AnimationFilter from "./animation-filter";

class AnimationPhoton2 extends React.PureComponent {
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
        <div>
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
                x={100}
                y={100}
                polarisation={45}
              ></AnimationCircle>
            </span>
          </Anime>
        </div>
        <div style={{ transform: `translateX(125px)` }}>
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
                x={100}
                y={100}
                polarisation={0}
              ></AnimationCircle>
            </span>
          </Anime>
        </div>
        <span style={filterContainer}>
          <AnimationFilter></AnimationFilter>
        </span>
      </div>
    );
  }
}

module.exports = AnimationPhoton2;
