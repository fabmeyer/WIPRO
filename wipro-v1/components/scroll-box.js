const React = require("react");

class ScrollBox extends React.Component {
  constructor(props) {
    super(props);
    this.exampleRef = React.createRef();
    this.state = {
      string: null,
      isColor: false,
      zoomFactor: this.props.zoomFactor
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.value !== newProps.value) {
      if (this.props.zoomFactor <= 50) {
        this.setState({
          zoomFactor: 75
        });
        this.props.updateProps({
          zoomFactor: this.state.zoomFactor
        });
        this.colorBackground();
      }
    }
    if (oldProps.zoomFactor !== newProps.zoomFactor) {
      this.colorBackground();
    }
  }

  colorBackground = () => {
    if (this.props.zoomFactor <= 50) {
      if (!this.state.isColor) {
        this.setState({
          string: this.exampleRef.current.innerHTML,
          isColor: true
        });
        let span = String(this.exampleRef.current.innerHTML)
          .split("")
          .map(function(el) {
            return (
              '<span class="char-' + el.toLowerCase() + '">' + el + "</span>"
            );
          })
          .join("");
        this.exampleRef.current.innerHTML = span;
      }
    } else if (this.props.zoomFactor > 50) {
      if (this.state.isColor) {
        this.exampleRef.current.innerHTML = this.state.string;
        this.setState({
          string: null,
          isColor: false
        });
      }
    }
  };

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
      verticalAlign: "middle",
      lineHeight: "1"
    };

    return (
      <div style={scrollBoxOuter}>
        <div style={scrollBoxInner}>
          <p style={scrollBoxText} ref={this.exampleRef}>
            {this.props.value}
          </p>
        </div>
      </div>
    );
  }
}

module.exports = ScrollBox;
