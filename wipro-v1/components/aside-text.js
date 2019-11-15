const React = require("react");

class AsideText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textContainer = {
      backgroundColor: "#FEF9FF",
      border: "1px solid #ccc",
      padding: "5px",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)"
    };

    return (
      <div className="aside-text" style={textContainer}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = AsideText;
