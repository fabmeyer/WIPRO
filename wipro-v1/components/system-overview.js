const React = require("react");
import ReactRough, { Rectangle } from "react-rough";

class SystemOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    const overviewContainer = {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto",
      textAlign: "center",
      verticalAlign: "middle",
      backgroundColor: "#FEF9FF",
      border: "1px solid #ccc"
    };

    return (
      <div style={overviewContainer}>
        <div>
          <p>Alice</p>
          <ReactRough width={240} height={240}>
            <Rectangle
              points={[20, 20, 200, 200]}
              fill="yellow"
              fillWeight="6"
              fillStyle="hachure"
              strokeWidth="2"
              roughness="2"
              bowing="0"
            />
          </ReactRough>
        </div>
        <div>
          <p>Channel</p>
          <ReactRough width={640} height={240}>
            <Rectangle
              points={[20, 110, 600, 20]}
              fill="grey"
              fillWeight="6"
              fillStyle="hachure"
              strokeWidth="2"
              roughness="2"
              bowing="0"
            />
          </ReactRough>
        </div>
        <div>
          <p>Bob</p>
          <ReactRough width={240} height={240}>
            <Rectangle
              points={[20, 20, 200, 200]}
              fill="red"
              fillWeight="6"
              fillStyle="hachure"
              strokeWidth="2"
              roughness="2"
              bowing="0"
            />
          </ReactRough>
        </div>
      </div>
    );
  }
}

module.exports = SystemOverview;
