const React = require("react");
import Anime from "react-anime";
import AnimationCircle from "./animation-circle";
import AnimationPerson from "./animation-person";

class AnimationEmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "none"
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.dataHasLoaded !== newProps.dataHasLoaded) {
      newProps.dataHasLoaded === true
        ? this.setState({
            display: "flex"
          })
        : this.setState({
            display: "flex"
          });
    }
  }

  render() {
    const outerContainer = {
      display: "flex",
      justifyContent: "space-between"
    };

    const animationContainer = {
      display: "flex",
      justifyContent: "start",
      width: "300px"
    };

    const textStyle = {
      padding: "0",
      margin: "0"
    };

    const personContainer = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "0.5em"
    };

    const photonContainer = {
      display: "flex",
      justifyContent: "center"
    };

    return (
      <div className="outerContainer" style={outerContainer}>
        <div style={personContainer}>
          <p style={textStyle}>Alice</p>
          <AnimationPerson color="GreenYellow" stroke="black"></AnimationPerson>
        </div>
        <div style={photonContainer}>
          <Anime
            easing="linear"
            duration={2500}
            opacity={1}
            direction="normal"
            loop={true}
            translateX={[-100, 200]}
          >
            <span style={animationContainer}>
              <AnimationCircle
                color="#FFF200"
                x={100}
                y={100}
                polarisation={0}
              ></AnimationCircle>
            </span>
            <span style={animationContainer}>
              <AnimationCircle
                color="#FFF200"
                x={100}
                y={100}
                polarisation={45}
              ></AnimationCircle>
            </span>
            <span style={animationContainer}>
              <AnimationCircle
                color="#FFF200"
                x={100}
                y={100}
                polarisation={90}
              ></AnimationCircle>
            </span>
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
        <div style={personContainer}>
          <p style={textStyle}>Bob</p>
          <AnimationPerson color="DodgerBlue" stroke="black"></AnimationPerson>
        </div>
      </div>
    );
  }
}

module.exports = AnimationEmit;
