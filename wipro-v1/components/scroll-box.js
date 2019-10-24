const React = require("react");

class ScrollBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scrollBoxOuter = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "5px"
    };

    const scrollBoxInner = {
      height: "500px",
      width: "500px",
      padding: "5px",
      border: "1px solid #999",
      borderRadius: "10px",
      fontSize: "32px",
      fontFamily: "monospace",
      backgroundColor: "GhostWhite",
      overflow: "auto"
    };

    return (
      <div style={scrollBoxOuter}>
        <div style={scrollBoxInner}>
          <p>{this.props.value}</p>
        </div>
      </div>
    );
  }
}

module.exports = ScrollBox;
