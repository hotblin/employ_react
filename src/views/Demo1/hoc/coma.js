// ComponentA
import React, { Component } from "react";
import HOC from "./hoc";

class ComponentA extends Component {
  render() {
    return <div>ComponentA</div>;
  }
}

export default HOC(ComponentA,'组件1');
