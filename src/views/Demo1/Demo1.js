import React ,{Component}from 'react'
import ComponentA from './components/coma';
import ComponentB from './components/comb';
import HocComponent from './hoc/coma';
import FaccComponent from './facc/comb';
// import Co from './hooks/co';
import './index.css';
export default class Demo1 extends Component {
  render(){
    return (
     <div className="demo1">
        <ComponentA/>
        <ComponentB/>
        <p>上面两个代码主要是代码内部通过按钮来控制组件的其他组件的显示和隐藏，但是这里我们看代码会发现，
        组件1 和 组件2 中大部分的代码是一样的，重复的，所以我们可以通过下面两种方式来实现代码的复用。
        </p>
        <HocComponent/>
        <FaccComponent/>

        <p>理解react16.6.7新增的hooks</p>
        {/* <Co/> */}
     </div>
    )
  }
}