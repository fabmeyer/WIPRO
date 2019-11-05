const React = require("react");

class ScrollBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scrollBoxOuter = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };

    const scrollBoxInner = {
      maxHeight: "500px",
      width: "500px",
      border: "1px solid #999",
      borderRadius: "10px",
      backgroundColor: "#F3FBFF",
      overflow: "auto"
    };

    const scrollBoxText = {
      fontFamily: `"Fira Code", monospace`,
      fontVariantLigatures: "none",
      fontSize: `${this.props.zoomFactor}%`,
      marginTop: "5px",
      marginBottom: "5px",
      textAlign: "center",
      verticalAlign: "middle"
    };

    return (
      <div style={scrollBoxOuter}>
        <div style={scrollBoxInner}>
          <p style={scrollBoxText}>{this.props.value}</p>
        </div>
      </div>
    );
  }
}

module.exports = ScrollBox;
