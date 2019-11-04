const React = require("react");

class ScrollBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: this.props.zoomFactor
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.zoomFactor !== newProps.zoomFactor) {
      this.setState({
        fontSize: this.props.zoomFactor
      });
    }
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
      fontFamily: "monospace",
      backgroundColor: "#F3FBFF",
      overflow: "auto"
    };

    return (
      <div style={scrollBoxOuter}>
        <div style={scrollBoxInner}>
          <p
            style={{
              fontSize: `${this.state.fontSize}%`,
              marginTop: "5px",
              marginBottom: "5px",
              textAlign: "center",
              verticalAlign: "middle"
            }}
          >
            {this.props.value}
          </p>
        </div>
      </div>
    );
  }
}

module.exports = ScrollBox;
