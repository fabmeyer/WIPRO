const React = require('react');
const SRD = require('storm-react-diagrams');
require("storm-react-diagrams/dist/style.min.css");

class DemoSimple extends React.PureComponent {
  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;

    function SimpleDiagramWidget(props) {
        return <SRD.DiagramWidget diagramEngine={props.engine} />;
      }
  }
}

module.exports = DemoSimple;