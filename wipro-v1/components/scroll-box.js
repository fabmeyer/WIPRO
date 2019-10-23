const React = require("react");

class ScrollBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const outerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "5px"
    };

    const divStyle = {
      height: "500px",
      width: "500px",
      padding: "5px",
      border: "1px solid #999",
      borderRadius: "10px",
      font: "32px",
      overflow: "auto"
    };

    return (
      <div className="outer-box" style={outerStyle}>
        <div className="scroll-box" style={divStyle}>
          <p>{this.props.value}</p>
        </div>
      </div>
    );
  }
}

module.exports = ScrollBox;
