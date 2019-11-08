const React = require("react");

class PhotonGrid extends React.Component {
  constructor(props) {
    super(props);
    this.exampleRef1 = React.createRef();
    this.exampleRef2 = React.createRef();
    this.state = {
      string1: null,
      string2: null,
      isColor: false
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (
      oldProps.bitString !== newProps.bitString ||
      oldProps.baseString !== newProps.baseString
    ) {
      this.setState({
        string1: this.props.bitString,
        string2: this.props.baseString,
        isColor: false
      });
      this.colorBackground();
    }
  }

  colorBackground = () => {
    if (!this.state.isColor && this.props.dataHasLoaded === true) {
      let span1 = String(this.props.bitString)
        .split("")
        .map(function(el) {
          return (
            '<span class="photonGrid-' +
            el.toLowerCase() +
            '">' +
            el +
            "</span>"
          );
        })
        .join("");
      this.exampleRef1.current.innerHTML = span1;
      let span2 = String(this.props.baseString)
        .split("")
        .map(function(el) {
          return (
            '<span class="photonGrid-' +
            el.toLowerCase() +
            '">' +
            el +
            "</span>"
          );
        })
        .join("");
      this.exampleRef2.current.innerHTML = span2;
      this.setState({ isColor: true });
    }
  };

  render() {
    this.colorBackground();

    const textContainer = {
      whiteSpace: "nowrap",
      overflow: "auto",
      border: "1px solid black",
      backgroundColor: "black",
      overflowX: "scroll"
    };

    const text = {
      fontSize: "48px",
      fontFamily: `"Fira Code", monospace`,
      fontVariantLigatures: "none",
      borderBottom: "2px solid black",
      marginBottom: "0",
      backgroundColor: "black",
      width: "min-content"
    };

    return (
      <div>
        <div style={textContainer}>
          <p style={text} ref={this.exampleRef1}>
            {this.props.bitString}
          </p>
          <p style={text} ref={this.exampleRef2}>
            {this.props.baseString}
          </p>
        </div>
      </div>
    );
  }
}

module.exports = PhotonGrid;
