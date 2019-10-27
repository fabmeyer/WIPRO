const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";

class AnimationTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: [100, 200, 300]
    };
  }

  componentDidMount() {
    console.log("component did mount");
    this.interval = setInterval(() => {
      console.log(this.state.shift);
      this.setState(state => {
        const shift = state.shift.map(c => c + 100);
        // return { shift };
      });
    }, 1000);
  }

  componentWillUnmount = () => {
    console.log("component will unmount");
    clearInterval(this.interval);
  };

  render() {
    const animationContainer = {
      position: "absolute"
    };
    return (
      <Anime
        easing="linear"
        elasticity="0"
        duration={2000}
        direction="normal"
        loop={true}
        delay={(el, index) => index * 1000}
        translateX={(el, index) => 200}
      >
        <span style={animationContainer}>
          <AnimationCircle color="yellow" x={100} y={100}></AnimationCircle>
        </span>
        <span style={animationContainer}>
          <AnimationCircle color="orange" x={300} y={100}></AnimationCircle>
        </span>
        <span style={animationContainer}>
          <AnimationCircle color="red" x={500} y={100}></AnimationCircle>
        </span>
      </Anime>
    );
  }
}

module.exports = AnimationTest;
