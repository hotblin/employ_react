import React,{Component} from 'react';
import FaCC from './facc';
//ComponentA
export default class ComponentA extends Component {
  render() {
    // console.log(this.props);
    // facc 就是一个函数内部接收一个参数
    return <FaCC>{toggle => toggle && <div>ComponentA</div>}</FaCC>;
  }
}

