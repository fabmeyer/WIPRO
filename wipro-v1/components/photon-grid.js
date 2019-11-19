const React = require("react");
import Rodal from "rodal";
import ScrollBox from "./scroll-box";
import ReactSlider from "react-slider";

class PhotonGrid extends React.Component {
  constructor(props) {
    super(props);
    this.exampleRef1 = React.createRef();
    this.exampleRef2 = React.createRef();
    this.state = {
      string1: null,
      string2: null,
      isColor: false,
      rodal1: false,
      rodal2: false
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
    } else if (oldProps.dataHasLoaded !== newProps.dataHasLoaded) {
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

  rodal1() {
    this.setState(function(prevState) {
      return { rodal1: !prevState.rodal1 };
    });
    this.state.rodal1 === false
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

  rodal2() {
    this.setState(function(prevState) {
      return { rodal2: !prevState.rodal2 };
    });
    this.state.rodal2 === false
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

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
      width: "min-content",
      cursor: "pointer"
    };

    return (
      <div>
        <div style={textContainer}>
          <p
            style={text}
            ref={this.exampleRef1}
            onClick={this.rodal1.bind(this)}
          >
            {this.props.bitString}
          </p>
          <Rodal
            visible={this.state.rodal1}
            onClose={this.rodal1.bind(this)}
            width="500px"
            height="auto"
            measure=""
          >
            <div>
              <ReactSlider
                className="horizontal-slider zoom-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                onChange={props => {
                  this.props.updateProps({
                    bitStringZoom: props
                  });
                }}
                renderThumb={(props, state) => (
                  <p {...props}>{state.valueNow}</p>
                )}
                defaultValue={this.props.bitStringZoom}
                style={{ cursor: "pointer" }}
                min={25}
                max={250}
                step={25}
              />
            </div>
            <div>
              <ScrollBox
                value={this.props.bitString}
                zoomFactor={this.props.bitStringZoom}
              ></ScrollBox>
            </div>
          </Rodal>
          <p
            style={text}
            ref={this.exampleRef2}
            onClick={this.rodal2.bind(this)}
          >
            {this.props.baseString}
          </p>
          <Rodal
            visible={this.state.rodal2}
            onClose={this.rodal2.bind(this)}
            width="500px"
            height="auto"
            measure=""
          >
            <div>
              <ReactSlider
                className="horizontal-slider zoom-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                onChange={props => {
                  this.props.updateProps({
                    baseStringZoom: props
                  });
                }}
                renderThumb={(props, state) => (
                  <p {...props}>{state.valueNow}</p>
                )}
                defaultValue={this.props.baseStringZoom}
                style={{ cursor: "pointer" }}
                min={25}
                max={250}
                step={25}
              />
            </div>
            <div>
              <ScrollBox
                value={this.props.baseString}
                zoomFactor={this.props.baseStringZoom}
              ></ScrollBox>
            </div>
          </Rodal>
        </div>
      </div>
    );
  }
}

module.exports = PhotonGrid;
