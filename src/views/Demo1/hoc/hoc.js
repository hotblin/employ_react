import React ,{Component} from 'react';
const HOC = (WrapperComponent,title) =>
  class HOC extends Component {
    state = { toggle: false };
    click = () => {
      this.setState({ toggle: !this.state.toggle });
    };

    render() {
      const { toggle } = this.state;
      return (
        <div>
          <button onClick={this.click}>{title}Toggle Name</button>
          {toggle && <WrapperComponent />}
           <p>这里HOC的写法就是提出共有的部分，接收一个Component进行渲染，我们使用一个组件来实现逻辑，然后通过这个高阶组件来显示和隐藏传入的组件</p>
        </div>
      );
    }
  };

export default HOC;
