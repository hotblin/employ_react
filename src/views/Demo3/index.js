import React ,{Component} from 'react';
import Child from './Child/Child';
import Parent from './Parent/Parent';
import './index.css';
export default class Demo3 extends Component {
  render(){
    return (
      <div className="demo3">
        <h2>demo3</h2>
        <Parent/>
        <Child/>
      </div>
    )
  }
}