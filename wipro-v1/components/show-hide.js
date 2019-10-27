const React = require("react");
// import "../styles.css";

class ShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      showHideInner: {
        heigth: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "5px"
      }
    };
  }

  showHide = () => {
    this.state.isVisible
      ? (this.setState(prevState => {
          let showHideInner = Object.assign({}, prevState.showHideInner);
          showHideInner.display = "none";
          return { showHideInner };
        }),
        this.setState({ isVisible: false }))
      : (this.setState(prevState => {
          let showHideInner = Object.assign({}, prevState.showHideInner);
          showHideInner.display = "flex";
          return { showHideInner };
        }),
        this.setState({ isVisible: true }));
  };

  render() {
    const showHideOuter = {
      borderTop: "1px solid #999"
    };
    const showHideButton = {
      marginRight: "0"
    };

    return (
      <React.Fragment>
        <div style={showHideOuter}>
          <button
            className="button-small"
            onClick={this.showHide.bind(this)}
            style={showHideButton}
          >
            Show/Hide
          </button>
        </div>
        <div style={this.state.showHideInner}>
          <div>{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

module.exports = ShowHide;
