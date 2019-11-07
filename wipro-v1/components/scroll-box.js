const React = require("react");

class ScrollBox extends React.Component {
  constructor(props) {
    super(props);
    this.exampleRef = React.createRef();
    this.state = {
      string: null
    };
  }

  componentDidMount() {
    console.log(this.exampleRef.current);
  }

  colorBackground = () => {
    let span = String(this.exampleRef.current.innerHTML)
      .split("")
      .map(function(el) {
        return '<span class="char-' + el.toLowerCase() + '">' + el + "</span>";
      })
      .join("");
    this.exampleRef.current.innerHTML = span;
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
      verticalAlign: "middle"
    };

    return (
      <div style={scrollBoxOuter}>
        <button onClick={this.colorBackground}></button>
        <div style={scrollBoxInner}>
          <p className="sBT" style={scrollBoxText} ref={this.exampleRef}>
            {this.props.value}
          </p>
        </div>
      </div>
    );
  }
}

module.exports = ScrollBox;
