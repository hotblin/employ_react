import React,{Component} from 'react';
//FACC
export default class FaCC extends Component {
  state = { toggle: false };
  click = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    const {children} = this.props;
    // 这 children 就是当前组件调用后被嵌套在内部的东西
    // 在这里是一个函数，函数参数是toggle，函数的功能是通过toggle的不同来显示不同的内容
    // 所以我们这里改变toggle的值，会显示不同的内容
    console.log(children);
    return (
      <div>
        <button onClick={this.click}>Toggle Name</button>
        {this.props.children(toggle)}

        <p>原理和HOC差不多，只是运用到了一个叫做 children的react props 可以将代码简化成</p>
      </div>
    );
  }
}
