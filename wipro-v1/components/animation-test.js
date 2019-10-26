const React = require("react");
import ReactRough, { Circle } from "react-rough";
import Anime from "react-anime";

class AnimationTest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Anime
        easing="easeInSine"
        duration={2000}
        direction="normal"
        loop={true}
        translateX="100%"
      >
        <div>
          <ReactRough width={200} height={200}>
            <Circle points={[100, 100, 100]} fill="yellow" fillWeight="1" />
          </ReactRough>
        </div>
      </Anime>
    );
  }
}

module.exports = AnimationTest;
