const React = require("react");
import Rodal from "rodal";
import ScrollBox from "./scroll-box";
import ReactSlider from "react-slider";

class PhotonGridSingle extends React.Component {
  constructor(props) {
    super(props);
    this.exampleRef = React.createRef();
    this.state = {
      string: null,
      isColor: false,
      rodal: false,
      showHide: "none"
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.string !== newProps.string) {
      this.setState({
        string: this.props.string,
        isColor: false
      });
      this.colorBackground();
    } else if (oldProps.dataHasLoaded !== newProps.dataHasLoaded) {
      newProps.dataHasLoaded === true
        ? this.setState({
            showHide: "block"
          })
        : this.setState({
            showHide: "none"
          });
      this.colorBackground();
    }
  }

  colorBackground = () => {
    if (!this.state.isColor && this.props.dataHasLoaded === true) {
      let span = String(this.props.string)
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
      this.exampleRef.current.innerHTML = span;
      this.setState({ isColor: true });
    }
  };

  rodal() {
    this.setState(function(prevState) {
      return { rodal: !prevState.rodal };
    });
    this.state.rodal === false
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
      <div style={{ display: this.state.showHide }}>
        <div style={textContainer}>
          <p style={text} ref={this.exampleRef} onClick={this.rodal.bind(this)}>
            {this.props.string}
          </p>
          <Rodal
            visible={this.state.rodal}
            onClose={this.rodal.bind(this)}
            width={500}
            height={560}
            measure="px"
          >
            <div>
              <ReactSlider
                className="horizontal-slider zoom-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                onChange={props => {
                  this.props.updateProps({
                    stringZoom: props
                  });
                }}
                renderThumb={(props, state) => (
                  <p {...props}>{state.valueNow}</p>
                )}
                defaultValue={this.props.stringZoom}
                style={{ cursor: "pointer" }}
                min={25}
                max={250}
                step={25}
              />
            </div>
            <div>
              <ScrollBox
                value={this.props.string}
                zoomFactor={this.props.stringZoom}
              ></ScrollBox>
            </div>
          </Rodal>
        </div>
      </div>
    );
  }
}

module.exports = PhotonGridSingle;
