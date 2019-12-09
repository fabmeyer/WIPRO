const React = require("react");

class ShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHideInner: {
        display: `${this.props.isVisible}`,
        justifyContent: `${this.props.position}`
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

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.trigger !== newProps.trigger) {
      this.showHide();
    }
  }

  render() {
    // conditional rendering
    const showButton = this.props.showButton;
    let button;
    if (showButton) {
      button = (
        <button
          className="button-small"
          onClick={this.showHide.bind(this)}
          style={{ marginRight: "10%" }}
        >
          Show/Hide
        </button>
      );
    }

    return (
      <React.Fragment>
        <div>{button}</div>
        <div style={this.state.showHideInner}>
          <div>{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

module.exports = ShowHide;
