// ComponentA
import React, { Component } from "react";

export default class ComponentA extends Component {
  state = { toggle: false };
  click = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <button onClick={this.click}>组件1 Toggle Name</button>
        {toggle && <div>ComponentA</div>}
      </div>
    );
  }
}
