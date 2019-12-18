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
      let propsVar = this.props;
      let span = String(this.props.string)
        .split("")
        .map(function(el) {
          return propsVar.colorBackground
            ? '<span class="photonGrid-' +
                el.toLowerCase() +
                '">' +
                el +
                "</span>"
            : '<span class="photonGrid-0">' + el + "</span>";
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

    const legendStyle = {
      display: "flex",
      width: "80px",
      height: "15px",
      justifyContent: "space-around"
    };

    const legendItemStyle = {
      display: "flex",
      alignItems: "baseline"
    };

    let span1;
    if (this.props.firstStringIsBit) {
      span1 = (
        <span style={legendStyle}>
          <span style={legendItemStyle}>
            <canvas
              width="10"
              height="10"
              style={{
                border: "1px solid black",
                backgroundColor: "black",
                height: "10px",
                width: "10px",
                marginRight: "5px"
              }}
            ></canvas>
            <p>1</p>
          </span>
          <span style={legendItemStyle}>
            <canvas
              width="10"
              height="10"
              style={{
                border: "1px solid black",
                backgroundColor: "white",
                height: "10px",
                width: "10px",
                marginRight: "5px"
              }}
            ></canvas>
            <p>0</p>
          </span>
        </span>
      );
    } else {
      span1 = (
        <span style={legendStyle}>
          <span style={legendItemStyle}>
            <canvas
              width="10"
              height="10"
              style={{
                border: "1px solid black",
                backgroundColor: "blue",
                height: "10px",
                width: "10px",
                marginRight: "5px"
              }}
            ></canvas>
            <p>x</p>
          </span>
          <span style={legendItemStyle}>
            <canvas
              width="10"
              height="10"
              style={{
                border: "1px solid black",
                backgroundColor: "yellow",
                height: "10px",
                width: "10px",
                marginRight: "5px"
              }}
            ></canvas>
            <p>+</p>
          </span>
        </span>
      );
    }

    return (
      <div style={{ display: this.state.showHide }}>
        <div style={textContainer}>
          <p style={{ color: "white" }}>
            You can click into the string to get a more detailed view about the
            string
          </p>
          <p style={text} ref={this.exampleRef} onClick={this.rodal.bind(this)}>
            {this.props.string}
          </p>
          <Rodal
            visible={this.state.rodal}
            onClose={this.rodal.bind(this)}
            width={500}
            height={575}
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
              {span1}
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
