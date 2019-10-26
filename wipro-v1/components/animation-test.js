const React = require("react");
import ReactRough, { Rectangle, Circle } from "react-rough";

class AnimationTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ReactRough width={200} height={400}>
        <Circle points={[100, 100, 100]} fill="yellow" fillWeight="1" />
      </ReactRough>
    );
  }
}

module.exports = AnimationTest;
