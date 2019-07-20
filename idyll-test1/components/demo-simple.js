"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var SRD = _interopRequireWildcard(require("storm-react-diagrams"));

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var _default = function _default() {
  //1) setup the diagram engine
  var engine = new SRD.DiagramEngine();
  engine.installDefaultFactories(); //2) setup the diagram model

  var model = new SRD.DiagramModel(); //3-A) create a default node

  var node1 = new SRD.DefaultNodeModel("Node 1", "rgb(0,192,255)");
  var port1 = node1.addOutPort("Out");
  node1.setPosition(100, 100); //3-B) create another default node

  var node2 = new SRD.DefaultNodeModel("Node 2", "rgb(192,255,0)");
  var port2 = node2.addInPort("In");
  node2.setPosition(400, 100); // link the ports

  var link1 = port1.link(port2);
  link1.addLabel("Hello World!"); //4) add the models to the root graph

  model.addAll(node1, node2, link1); //5) load model into engine

  engine.setDiagramModel(model); //6) render the diagram!

  return React.createElement(SRD.DiagramWidget, {
    className: "srd-demo-canvas",
    diagramEngine: engine
  });
};

exports["default"] = _default;
