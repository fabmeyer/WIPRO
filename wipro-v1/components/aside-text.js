const React = require("react");

class AsideText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textContainer = {
      backgroundColor: "#FEF9FF",
      border: "1px solid #ccc",
      padding: "5px"
    };

    return (
      <div className="aside-text" style={textContainer}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = AsideText;
