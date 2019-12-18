const React = require("react");
import "babel-polyfill";

class ButtonStartCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strLength: this.checkType(this.props.strLength),
      bitString: this.props.bitString,
      baseString: this.props.baseString,
      dataHasLoaded: false
    };
  }

  checkType = arg => {
    if (typeof arg !== "number") {
      return eval(arg);
    } else {
      return arg;
    }
  };

  componentDidMount() {
    if (this.props.autostart) {
      this.start();
    }
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.strLength !== newProps.strLength) {
      this.setState({
        strLength: this.props.strLength
      });
    }
  }

  settings = () => {
    let formData = new FormData();
    formData.append("stringLength",  this.checkType(this.props.strLength));
    formData.append("frequency",  this.props.frequency); 
    formData.append("noise", this.props.noise);
    formData.append("error", this.props.error);
    const data = new URLSearchParams(formData);

    console.log(JSON.stringify(data));
    async function postData(url = "/rest/post/settings") {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      console.log(content);
    }
    postData();
  };

  start = () => {
    this.settings();
    
    let formData = new FormData();
    formData.append("prob",  50);
    const data = new URLSearchParams(formData);

    this.setState({ dataHasLoaded: false });
    async function getBitString(
      url = "/rest/post/randomstring"
    ) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      });
      const content = await res.json();
      console.log(content);
      this.setState({ bitString: content });
      this.props.updateProps({
        bitString: this.state.bitString
      });
    }
    getBitString();
    // fetch(`http://localhost:8080/rest/post/randomstring/`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ bitString: data.bitString });
    //     this.props.updateProps({
    //       bitString: this.state.bitString
    //     });
    //   })
    //   .catch(console.log);
    // fetch(`http://localhost:8080/rest/post/randombase`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ baseString: data.baseString });
    //     this.props.updateProps({
    //       baseString: this.state.baseString
    //     });
    //   })
    //   .catch(console.log)
    //   .then(_data => {
    //     this.setState({ dataHasLoaded: true });
    //     this.props.updateProps({
    //       dataHasLoaded: true
    //     });
    //   });
  };

  render() {
    return (
      <React.Fragment>
        <button className="button-small" onClick={this.start.bind(this)}>
          {this.props.text}, Length: {this.state.strLength}
        </button>
      </React.Fragment>
    );
  }
}

module.exports = ButtonStartCopy;
