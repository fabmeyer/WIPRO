const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";

class AnimationTest extends React.PureComponent {
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
      <div className="outerContainer" style={outerContainer}>
        <Anime
          easing="linear"
          elasticity={1}
          duration={4000}
          direction="normal"
          loop={true}
          translateX={[300, 600, 900, 0]}
          opacity={[0, 1, 1, 0, 0, 0, 0, 0]}
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
        <Anime
          easing="linear"
          elasticity={1}
          duration={4000}
          direction="normal"
          loop={true}
          translateX={[300, 600, -300, 0]}
          opacity={[1, 0, 0, 0, 0, 0, 0, 1]}
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
        <Anime
          easing="linear"
          elasticity={1}
          duration={4000}
          direction="normal"
          loop={true}
          translateX={[300, -600, -300, 0]}
          opacity={[0, 0, 0, 0, 0, 1, 1, 0]}
        >
          <span style={animationContainer}>
            <AnimationCircle
              color="#FFF200"
              x={100}
              y={100}
              polarisation={90}
            ></AnimationCircle>
          </span>
        </Anime>
        <Anime
          easing="linear"
          elasticity={1}
          duration={4000}
          direction="normal"
          loop={true}
          translateX={[-900, -600, -300, 0]}
          opacity={[0, 0, 0, 1, 1, 0, 0, 0]}
        >
          <span style={animationContainer}>
            <AnimationCircle
              color="#FFF200"
              x={100}
              y={100}
              polarisation={135}
            ></AnimationCircle>
          </span>
        </Anime>
      </div>
    );
  }
}

module.exports = AnimationTest;
