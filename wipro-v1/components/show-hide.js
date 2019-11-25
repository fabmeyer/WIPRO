const React = require("react");

class ShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHideInner: {
        height: "5px",
        display: `${this.props.isVisible}`,
        alignItems: "middle",
        justifyContent: `${this.props.position}`,
        marginBottom: "5px"
      }
    };
  }

  showHide = () => {
    this.state.showHideInner.display === "flex"
      ? this.setState(prevState => {
          let showHideInner = Object.assign({}, prevState.showHideInner);
          showHideInner.display = "none";
          return { showHideInner };
        })
      : this.setState(prevState => {
          let showHideInner = Object.assign({}, prevState.showHideInner);
          showHideInner.display = "flex";
          return { showHideInner };
        });
  };

  render() {
    const showHideOuter = {
      borderTop: "1px solid #999"
    };
    const showHideButton = {
      marginRight: "10%"
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
